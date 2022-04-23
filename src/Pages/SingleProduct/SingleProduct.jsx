import React from 'react';
import { useParams } from 'react-router-dom';
import { videoData } from "../../API/videoData";
import "./SingleProduct.css"

const SingleProduct = () => {
   const {video_id} = useParams()
   const {data} = videoData()

   console.log('from single page', data);
  return (
    <div className='single-video-container'>
    <div className='video-display-container'>
    <iframe
     width="100%"
     height="500px"
     src={`https://www.youtube.com/embed/${video_id}`}
     title="YouTube video player"
     frameBorder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen="">
    </iframe>

    </div>

    <div>
  
    </div>
    </div>
  )
}

export  {SingleProduct}