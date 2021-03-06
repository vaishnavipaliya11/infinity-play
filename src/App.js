import "./App.css";
import Mockman from "mockman-js";
import { Playlist } from "./Pages/Playlist/Playlist";
import { WatchLater } from "./Pages/Watch/Watch";
import { Liked } from "./Pages/Liked/Liked";
import { History } from "./Pages/History/History";
import { Login } from "./Pages/Login/Login";
import {Explore} from "./Pages/Explore/Explore";
import  {Navbar} from "../src/Components/Navbar"
import { Sidebar } from "./Components/Sidebar";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Sign/Signup";
import { SingleProduct } from "./Pages/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Toaster/>
    <div className="page-container">
    <Sidebar/>
    <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watch" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/singlevideo/:video_id" element={<SingleProduct />} />
       <Route path="/mock" element ={<Mockman/>}/>
       <Route path="/login" element={<Login />} />
       <Route path="/sign" element={<Signup />} />
    </Routes>
     
    </div>

    </div>
  );
}

export default App;
