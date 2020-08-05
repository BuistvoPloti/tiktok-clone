import React from "react"
import './styles/VideoSidebar.css'

function VideoSidebarIcon(props) {
  return (
    <div className="videoSidebar__button">
      {props.iconComponent}
      <p>{props.value}</p>
    </div>
  )
}

export {
  VideoSidebarIcon
}