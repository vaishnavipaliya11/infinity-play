import React from "react";
import { usePlay } from "../context/playListContext";
import "./modal.css";
import { useState } from "react";
import { createPlaylist } from "../Utils/createPlaylist";
import {addToPlaylist} from "../Utils/addToPlaylist"


const Modal = () => {
  const { playListDispatch, playListState } = usePlay();
  const { createUserPlaylist, selectedPlaylist } = playListState;
  console.log("create playlist",createUserPlaylist);

  const [userList, setUserList] = useState("");

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserList({ ...userList, [name]: value });
  };


  return (
    <div className="modal-main-container">
      <div className="modal-container">
        <h2>Name of Playlist</h2>
        {createUserPlaylist.map(( data) => {
       
          const isVideo = data.videos.filter(
            (video) => video._id === selectedPlaylist._id
          );

          console.log(selectedPlaylist);
          return (
            <div>
              <input style={{"width":"5rem"}}
                className="playlist-checkbox"
                onChange={() =>
                  addToPlaylist(selectedPlaylist,data._id, playListDispatch)
                }
                type="checkbox"
                checked={isVideo}
              />

              <li>{data.title}</li>
            </div>
          );
        })}

        <button
          class="btn modal-btn"
          onClick={() => playListDispatch({ type: "MODAL_CLOSE" })}
        >
          X
        </button>
        <input
          className="modal-input"
          name="title"
          value={userList.title}
          type="text"
          onChange={userInputHandler}
        />

        <button
          className="play-btn"
          onClick={() =>
            createPlaylist(userList, playListDispatch, setUserList)
          }
        >
          Create Playlist
        </button>
      </div>
    </div>
  );
};

export {Modal} ;
