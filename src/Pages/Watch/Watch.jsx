import React from 'react'
import { useWatchLater } from '../../context/watchContext';
import {useAuth} from "../../context/authContext";

const WatchLater = () => {
  const { watchLaterState } = useWatchLater();
  const {auth}= useAuth();
  const {watchLater}= watchLaterState;

  console.log(watchLater);
  return (
    <div>
    <h2>This is Watch later page.</h2>
    {watchLater.map((video)=>{
    return (
    <div>
    {video._id}
    </div>
  )
  })}
    </div>
  )
}

export  {WatchLater}
