import React from "react"
import './styles/VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import {VideoSidebarIcon} from "./SideBarIcon"


function VideoSidebar() {
  return (
    <div className="videoSidebar">
     {/* <div className="videoSidebar__button">
        <FavoriteIcon/>
        <p>300</p>
      </div>
      <div className="videoSidebar__button">
        <CommentIcon/>
        <p>123</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon/>
        <p>25</p>
      </div>*/}
      <VideoSidebarIcon iconComponent=<FavoriteIcon/> value={213}/>
      <VideoSidebarIcon iconComponent=<CommentIcon/> value={35}/>
      <VideoSidebarIcon iconComponent=<ShareIcon/> value={7}/>
    </div>
  )
}

export {
  VideoSidebar
}