import React from "react";
import "../Explore/Explore.css";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistAdd, MdWatchLater, MdExplore } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="main-container">
      
      <div className="video-cards-container">
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
              <img src="https://i.etsystatic.com/24687126/r/il/b6261e/2891796307/il_340x270.2891796307_rw2m.jpg" />
            </div>
            <div className="product-details">
              <span className="product-catagory">
                <p>catagory-arts</p>
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
              <img src="https://i.etsystatic.com/24687126/r/il/b6261e/2891796307/il_340x270.2891796307_rw2m.jpg" />
            </div>
            <div className="product-details">
              <span className="product-catagory">
                <p>catagory-arts</p>
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
              <img src="https://i.etsystatic.com/24687126/r/il/b6261e/2891796307/il_340x270.2891796307_rw2m.jpg" />
            </div>
            <div className="product-details">
              <span className="product-catagory">
                <p>catagory-arts</p>
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
              <img src="https://i.etsystatic.com/24687126/r/il/b6261e/2891796307/il_340x270.2891796307_rw2m.jpg" />
            </div>
            <div className="product-details">
              <span className="product-catagory">
                <p>catagory-arts</p>
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
              <img src="https://i.etsystatic.com/24687126/r/il/b6261e/2891796307/il_340x270.2891796307_rw2m.jpg" />
            </div>
            <div className="product-details">
              <span className="product-catagory">
                <p>catagory-arts</p>
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
      </div>
    </div>
  );
};

export { Explore };
