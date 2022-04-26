import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import "./SingleProduct.css";
import { getVideo } from "../../Utils/getVideo";
import { useState } from "react";

const SingleProduct = () => {
  const { video_id } = useParams();

  const [singleVideoData, setSingleVideoData] = useState({});

  useEffect(() => {
    (async () => {
      const resVideo = await getVideo(video_id);
      setSingleVideoData(resVideo);
    })();
  }, [video_id]);

  return (
    <div>
      <div className="video-container">
        <div className="single-video-container">
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${video_id}`}
            title="YouTube video player"
            frameBorder="0"
            onPlay={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>

      <div className="video-btn-title-set">
        <p className="video-title">{singleVideoData.title}</p>
        <div className="video-btns">
          <button className="btns">
            <MdPlaylistAdd />
          </button>
          <button>
            <MdWatchLater />
          </button>
        </div>
      </div>
      <p className="video-description">{singleVideoData.description}</p>
    </div>
  );
};

export { SingleProduct };
