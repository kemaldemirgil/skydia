// imports..........................
import { FC } from 'react'
import Header from './components/Header'
import VideoBG from './components/VideoBG'
import './style.css'


const Enter: FC = () => {
  return (
    <div className="main-enter">
      <VideoBG />
      <Header />
    </div>
  )
}

export default Enter
