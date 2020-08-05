import React from "react"
import './styles/VideoSidebar.css'

function VideoSidebarIcon({iconComponent, value}) {
  return (
    <div className="videoSidebar__button">
      {iconComponent}
      <p>{value}</p>
    </div>
  )
}

export {
  VideoSidebarIcon
}