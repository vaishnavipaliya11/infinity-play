import React from 'react'
import { useWatchLater } from '../../context/watchContext';
import {useAuth} from "../../context/authContext";
import { VideoCard } from '../../Components/VideoCard/VideoCard';
import "./Watch.css"


const WatchLater = () => {

  const { watchLaterState } = useWatchLater();
  const {auth}= useAuth();
  const {watchLater}= watchLaterState;
  
  console.log(watchLater);

  return (
    <div className='watchLater-container'>
    <h2>This is Watch later page.</h2>

    {watchLater.map((video)=>{
      const {_id,title} = video
      return(
        <div className='video-map-container'>
        <VideoCard video={video}/>
        <button className='video-delete-btn'
        onClick=
        {deleteWatchLater(video, watchLaterDispatch)}>
        
        delete</button>
        </div>
        
      )
    })}
  
    </div>
  )
}

export  {WatchLater}
