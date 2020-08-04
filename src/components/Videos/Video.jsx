import React, {useRef, useState} from "react"
import './styles/Video.css'
import './styles/VideoFooter.css'
import {VideoFooter} from "./VideoFooter"
import {VideoSidebar} from "./VideoSidebar"

function Video() {
  const [playing, setPlay] = useState(false)
  const videoRef = useRef(null)
  const onVideoPress = () => {
    if(playing) {
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
        src="https://v16m.tiktokcdn.com/0fd54de9269eca22423e4eef4bc31026/5f2afada/video/tos/useast2a/tos-useast2a-ve-0068c003/63cafdbf013245f2a56d0ff2607ba804/?a=1233&br=6076&bt=3038&cr=0&cs=0&dr=0&ds=3&er=&l=202008031830490101901860143235CA94&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=am9uOzd4bjdodjMzZjczM0ApM2ZoNzw1ZmQ2NztkZjNlZWdzbDJwYi1kcjJfLS01MTZzcy5gYGNiNC1jMC00MWA1NTM6Yw%3D%3D&vl=&vr=">
      </video>
      <VideoFooter channel="denis1264" description="description" song="eminem gentleman"/>
      <VideoSidebar/>
    </div>
  )
}

export {
  Video
}