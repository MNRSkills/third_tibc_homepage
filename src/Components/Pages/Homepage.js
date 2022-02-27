import React from 'react'
import Highlights from "../Rightside/highlight"
import Video from "../Rightside/video"

import "../../styles/homepage.css"

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='homepage-highlight-card'>
        <Highlights/>
      </div>
      <div className='homepage-video-section'>
        <Video/>
      </div>
    </div>
  )
}

export default Homepage;