import "./App.css";
import Mockman from "mockman-js";
import { Playlist } from "./Pages/Playlist/Playlist";
import { WatchLater } from "./Pages/Watch/Watch";
import { Liked } from "./Pages/Liked/Liked";
import { History } from "./Pages/History/History";
import {Explore} from "./Pages/Explore/Explore";
import  {Navbar} from "../src/Components/Navbar"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watch" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
       <Route path="/mock" element ={<Mockman/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
