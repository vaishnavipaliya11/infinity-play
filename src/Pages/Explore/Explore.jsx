import React from "react";
import "../Explore/Explore.css";

const Explore = () => {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <ul className="options-list fs-lrg pd-lrg">
          <li className="pd-med">Explore</li>
          <div>
          <li className="pd-med">Playlist </li>
          </div>
          
          <li className="pd-med">Liked</li>
        
          <li className="pd-med">Watchlater</li>
          <li className="pd-med">History</li><i class="fa-solid fa-clock-rotate-left"></i>
        </ul>
      </div>
      <div className="video-cards-container">
      
          <div className="products-card-container">
            <div className="product-card">
              <div className="badge">
              <button className="clear-btn">
                <i className="bi bi-save-fill"></i>
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
                <i class="bi bi-card-list"></i>
                </button>
                </div>
                
              </div>
            </div>
          </div>

          <div className="products-card-container">
          <div className="product-card">
            <div className="badge">
            <button className="clear-btn">
              <i className="bi bi-save-fill"></i>
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
              <i className="bi bi-card-list"></i>
              </button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="products-card-container">
        <div className="product-card">
          <div className="badge">
          <button className="clear-btn">
            <i className="bi bi-save-fill"></i>
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
            <i className="bi bi-card-list"></i>
            </button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="products-card-container">
      <div className="product-card">
        <div className="badge">
        <button className="clear-btn">
          <i className="bi bi-save-fill"></i>
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
          <i className="bi bi-card-list"></i>
          </button>
          </div>
          
        </div>
      </div>
    </div>
    <div className="products-card-container">
    <div className="product-card">
      <div className="badge">
      <button className="clear-btn">
        <i className="bi bi-save-fill"></i>
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
        <i className="bi bi-card-list"></i>
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
