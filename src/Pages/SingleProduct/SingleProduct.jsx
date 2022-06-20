import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { MdPlaylistAdd, MdWatchLater,MdOutlineWatchLater } from "react-icons/md";
import "./SingleProduct.css";
import { getVideo } from "../../Utils/getVideo";
import { useState } from "react";
import { AiFillLike ,AiOutlineLike} from "react-icons/ai";
import { useAuth } from "../../context/authContext";
import { addToLike } from "../../Utils/addToLike";
import { useLiked } from "../../context/likeContext";
import { useWatchLater } from "../../context/watchContext";
import { addToWatchLater } from "../../Utils/addToWatchLater";
import { deleteLikedVideo } from "../../Utils/deleteLike";
import { deleteWatchLater } from "../../Utils/deleteWatchLater";
const SingleProduct = () => {
  const { auth } = useAuth();
  const { video_id } = useParams();
  const navigate = useNavigate();
  const { likedState, likedDispatch } = useLiked();
  const { likedVideo } = likedState;
 
  const {watchLaterState, watchLaterDispatch } = useWatchLater();
  const {watchLater}= watchLaterState
  console.log(watchLater);
  const [singleVideoData, setSingleVideoData] = useState({});

  useEffect(() => {
    (async () => {
      const resVideo = await getVideo(video_id);
      setSingleVideoData(resVideo);
    })();
  }, [video_id]);

  const likeHandler = () => {
    {
      likedVideo.find((item) => item._id === video_id ) ?
      deleteLikedVideo(video_id, likedDispatch):
      addToLike(singleVideoData,likedDispatch)
    }
  };

  const watchHandler = () =>{
    {watchLater.find((eachvideo) => eachvideo._id === video_id) ?
    deleteWatchLater(video_id,watchLaterDispatch) :
    addToWatchLater(singleVideoData,watchLaterDispatch)}
  }

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
          {likedVideo.find((item)  => item._id === video_id ) ? (
            <button
              className="option-btns"
              onClick={() => (auth ? likeHandler() : navigate("/login"))}
            >
             
             <AiFillLike className="icon-filled"/>
            </button>
          ) : (
            <button
              className="option-btns"
              onClick={() => (auth ? likeHandler() : navigate("/login"))}
            >
              <AiOutlineLike className="icon-filled"/>
            </button>
          )}
          
            {watchLater.find((eachvideo)=> eachvideo._id === video_id) ?
            <button className="option-btns"
            onClick={() =>
              auth
                ? watchHandler()
                : navigate("/login")
            }> <MdWatchLater className="icon-filled"/>
            </button> :
          <button className="option-btns"
          onClick={() =>
            auth
              ? watchHandler()
              : navigate("/login")
          }>
          <MdOutlineWatchLater className="icon-filled"/>
          </button>}
          
        </div>
      </div>
      <p className="video-description">{singleVideoData.description}</p>
    </div>
  );
};

export { SingleProduct };
