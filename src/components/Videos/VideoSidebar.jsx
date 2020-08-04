import React from "react"
import './styles/VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar() {
  return (
    <div className="videoSidebar">
      <div className="videSidebar__button">
        <FavoriteIcon/>
        <p>300</p>
      </div>
      <div className="videSidebar__button">
        <CommentIcon/>
        <p>123</p>
      </div>
      <div className="videSidebar__button">
        <ShareIcon/>
        <p>25</p>
      </div>
    </div>
  )
}

export {
  VideoSidebar
}