import React from 'react'
import { useWatchLater } from '../../context/watchContext';
import {useAuth} from "../../context/authContext";
import { VideoCard } from '../../Components/VideoCard/VideoCard';
import "./Watch.css"
import { deleteWatchLater } from '../../Utils/deleteWatchLater';

const WatchLater = () => {

  const { watchLaterState } = useWatchLater();
  const {auth}= useAuth();
  const {watchLater}= watchLaterState;
  const { watchLaterDispatch } = useWatchLater();

  return (
    <div className='watchLater-container'>
    <h2>This is Watch later page.</h2>

    {watchLater.map((video)=>{
      const {_id} = video
      return(
        <div className='video-map-container'>
        <VideoCard video={video}/>
        <button className='video-delete-btn'
        onClick={() =>
           deleteWatchLater(_id, watchLaterDispatch)
          
        }> Remove </button>
        </div>
        
      )
    })}
  
    </div>
  )
}

export  {WatchLater}
