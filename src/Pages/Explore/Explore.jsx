import React from "react";
import "../Explore/Explore.css";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistAdd, MdWatchLater, MdExplore } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { videoData } from "../../API/videoData";

const Explore = () => {

  const {data} = videoData()
  console.log(data);
  return (
    <div className="main-container">
      
      <div className="video-cards-container">

      {data.map(({_id, title})=>{
        return(
          
          <div className="products-card-container">
          <div className="product-card">
            <div className="badge">
              <button className="clear-btn">
                <h3>
                  {" "}
                  <MdWatchLater />{" "}
                </h3>
              </button>
            </div>
            <div className="product-tumb">
              <img  src={`https://i.ytimg.com/vi/${_id}/0.jpg`} />
            </div>
            <div className="product-details">
              <span className="product-catagory">
                <p className="prod-title">{title}</p>
              </span>

              <div>
                <button className="clear-btn">
                  <h2>
                    <MdPlaylistAdd />
                  </h2>
                </button>

                <button className="clear-btn">
                  <h2>
                    <AiOutlineLike />
                  </h2>
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
