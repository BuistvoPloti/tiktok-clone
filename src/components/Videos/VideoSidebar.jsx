import React, {useState} from "react"
import './styles/VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import {VideoSidebarIcon} from "./SideBarIcon"


function VideoSidebar({likes, shares, comments}) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="videoSidebar">
      {
        liked
          ? <VideoSidebarIcon
            iconComponent={<FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)}/>}
            value={likes}/>
          : <VideoSidebarIcon
            onClick={(e) => setLiked(true)}
            iconComponent={<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)}/>}
            value={likes}/>
      }

      <VideoSidebarIcon iconComponent={<CommentIcon fontSize="large"/>} value={comments}/>
      <VideoSidebarIcon iconComponent={<ShareIcon fontSize="large"/>} value={shares}/>
      <img className="videoSidebar__record" src="https://image.flaticon.com/icons/svg/3011/3011421.svg" alt=""/>
    </div>
  )
}

export {
  VideoSidebar
}