// imports..........................
import { FC } from 'react'
import bg from "../../../assets/sky.mp4"

const VideoBG: FC = () => {
  return (
    <div>
      <video autoPlay muted loop className="video-bg">
        <source src={bg} type="video/mp4"/>
      </video>
    </div>
  )
}

export default VideoBG
