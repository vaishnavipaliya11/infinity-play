import React from "react";
import { usePlay } from "../context/playListContext";
import "./modal.css";
import { useState } from "react";
import { createPlaylist } from "../Utils/createPlaylist";

const Modal = () => {
  const { playListDispatch, playListState } = usePlay();

  const [userList, setUserList] = useState("");

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserList({ ...userList, [name]: value });
  };

 

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
        name="title"
        value={userList.title}
        type="text"
        onChange={userInputHandler} />

        <button
          className="play-btn"
          onClick={() => createPlaylist(userList, playListDispatch , setUserList)}
        >
          Create Playlist
        </button>
      </div>
    </div>
  );
};

export default Modal;
