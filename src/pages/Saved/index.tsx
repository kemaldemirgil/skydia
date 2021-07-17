import './style.css'
import Navbar from "../components/Navbar"
import Body from "./components/Body"

const index = () => {
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
