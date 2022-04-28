import React from "react";
import "../Explore/Explore.css";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistAdd, MdWatchLater, MdExplore } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { videoData } from "../../API/videoData";
import { useWatchLater } from "../../context/watchContext";
import { useAuth } from "../../context/authContext";
import { addToWatchLater } from "../../Utils/addToWatchLater";
import {VideoCard} from "../../Components/VideoCard/VideoCard";
import Modal from "../../Components/Modal";
import { usePlay } from "../../context/playListContext";

const Explore = () => {
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const navigate = useNavigate();
  const { data } = videoData();
  const { auth } = useAuth();
  const {playListState}= usePlay()
  const{modal}= playListState
  return (
    <div className="main-container">
    

    
      <div className="video-cards-container">
      <div className="modal-main-container">
      {modal?<Modal/>:""}
      </div>
      
      {data.map((video)=>{
        return (
          <VideoCard video={video}/>
        )
      })}
        
      </div>
    </div>
  );
};

export { Explore };

// <VideoCard video={video}/>
