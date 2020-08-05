import React, {useRef, useState} from "react"
import './styles/Video.css'
import './styles/VideoFooter.css'
import {VideoFooter} from "./VideoFooter"
import {VideoSidebar} from "./VideoSidebar"

function Video({
                 url,
                 channel,
                 description,
                 song,
                 likes,
                 comments,
                 shares
               }) {
  const [playing, setPlay] = useState(false)
  const videoRef = useRef(null)
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}>
      </video>
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} comments={comments} shares={shares}/>
    </div>
  )
}

export {
  Video
}