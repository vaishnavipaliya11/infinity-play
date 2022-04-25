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
const Explore = () => {

  const {watchLaterState,watchLaterDispatch} = useWatchLater()
  const navigate = useNavigate()
  const {data} = videoData()
  const {auth}= useAuth()
  return (
    <div className="main-container">
      
      <div className="video-cards-container">

      {data.map((video)=>{
        const {_id, title, description} = video
        return(
          
          <div className="products-card-container">
          <div className="product-card">
            <div className="product-tumb">
              <img  src={`https://i.ytimg.com/vi/${_id}/0.jpg`} />
            </div>
            <div className="product-details">
              <span className="product-catagory">
              <Link to={`/singlevideo/${_id}`}>
              <p className="prod-title">{title}</p>
              </Link>
                
              </span>

              <div>
                <button className="clear-btn">
                  <h2>
                    <MdPlaylistAdd />
                  </h2>
                </button>

                <button className="clear-btn"
                onClick={() =>
                  auth
                    ? addToWatchLater(video, watchLaterDispatch)
                    : navigate("/login")
                }>
                <h3>
                <MdWatchLater />
                </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
          
        )
      })}

      </div>
    </div>
  );
};

export { Explore };


<VideoCard video={video}/>
