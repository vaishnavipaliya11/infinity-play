import React from "react";
import { usePlay } from "../context/playListContext";
import "./modal.css";
import { useState } from "react";
const Modal = () => {
  const { playListDispatch } = usePlay();
  const [userList, setUserList] = useState({
    title: "",
  });

  const userInputHandler=(e)=>{
    const { name, value } = e.target;
    setUserList({ ...userList, [name]: value });
    console.log(setUserList);
  }
  return (
    <div className="modal-main-container">
      <div className="modal-container">
        <h2>Name of Playlist</h2>
        <button
          class="btn modal-btn"
          onClick={() => playListDispatch({ type: "MODAL_CLOSE" })}
        >
          X
        </button>
        <input className="modal-input"
        onClick={userInputHandler} />
        <button
          className="play-btn"
          onClick={() =>
            createPlaylistHandler(playlist, playlistDispatch, setPlaylist)
          }
        >
          Create Playlist
        </button>
      </div>
    </div>
  );
};

export default Modal;
