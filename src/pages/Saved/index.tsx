// imports..........................
import { FC } from 'react'
import './style.css'
import Navbar from "../components/Navbar"
import Body from "./components/Body"

const index: FC = () => {
  return (
    <>
      <Navbar />
      <div className="favourite-cities-container">
        <Body />
      </div>
    </>
  )
}

export default index
