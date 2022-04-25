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

const Explore = () => {
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const navigate = useNavigate();
  const { data } = videoData();
  const { auth } = useAuth();

  return (
    <div className="main-container">
      <div className="video-cards-container">
      {data.map((video)=>{
        console.log("from explore", video);
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
