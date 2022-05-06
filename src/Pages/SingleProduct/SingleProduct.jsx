import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import "./SingleProduct.css";
import { getVideo } from "../../Utils/getVideo";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useAuth } from "../../context/authContext";
import { addToLike } from "../../Utils/addToLike";
import { useLiked } from "../../context/likeContext";
import { useWatchLater } from "../../context/watchContext";
import { addToWatchLater } from "../../Utils/addToWatchLater";

const SingleProduct = () => {
  const { auth } = useAuth();
  const { video_id } = useParams();
  const navigate = useNavigate();
  const { likedDispatch } = useLiked();
  const { watchLaterDispatch } = useWatchLater();
  const [singleVideoData, setSingleVideoData] = useState({});

  useEffect(() => {
    (async () => {
      const resVideo = await getVideo(video_id);
      setSingleVideoData(resVideo);
    })();
  }, [video_id]);

  return (
    <div className="single-video-wrapper">
      <div className="video-container">
        <div className="single-video-container">
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${video_id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>

      <div className="video-btn-title-set">
        <p className="video-title">{singleVideoData.title}</p>
        <div className="video-btns">
          <button
            className="option-btns"
            onClick={() =>
              auth
                ? addToLike(singleVideoData, likedDispatch)
                : navigate("/login")
            }
          >
            <AiFillLike />
          </button>

          <button className="option-btns">
            <MdWatchLater
              onClick={() =>
                auth
                  ? addToWatchLater(singleVideoData, watchLaterDispatch)
                  : navigate("/login")
              }
            />
          </button>
        </div>
      </div>
      <p className="video-description">{singleVideoData.description}</p>
    </div>
  );
};

export { SingleProduct };
