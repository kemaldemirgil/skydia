import React from 'react'
import bg from "../../../assets/sky.mp4"

const VideoBG = () => {
  return (
    <div>
      <video autoPlay muted loop className="video-bg">
        <source src={bg} type="video/mp4"/>
      </video>
    </div>
  )
}

export default VideoBG
