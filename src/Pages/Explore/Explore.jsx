import React, { useEffect } from "react";
import "../Explore/Explore.css";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistAdd, MdWatchLater, MdExplore } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { videoData } from "../../API/videoData";
import { useWatchLater } from "../../context/watchContext";
import { useAuth } from "../../context/authContext";
import { addToWatchLater } from "../../Utils/addToWatchLater";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { Modal } from "../../Components/Modal";
import { usePlay } from "../../context/playListContext";
import { getSearchedVideo } from "../../Utils/getSearchedVideo";
import { useData } from "../../context/dataContext";
import { getAllVideos } from "../../Utils/getallVideos";

const Explore = () => {
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const navigate = useNavigate();
  const { data, search,setData } = useData();
  const { auth } = useAuth();
  const { playListState } = usePlay();

  const { modal } = playListState;
  const searchVideo = getSearchedVideo(search, data);

  useEffect(()=>{
    getAllVideos(setData)
  },[])
  return (
    <div className="main-container">
      <div className="video-cards-container">
        {modal ? <Modal /> : ""}

        {searchVideo.map((video) => {
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
};

export { Explore };
