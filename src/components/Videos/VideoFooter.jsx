import React from "react"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker"

function VideoFooter({channel, description, song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon"/>
          <Ticker mode="smooth">
            {
              ({}) => (
                <>
                  <p>{song}</p>
                </>
              )
            }
          </Ticker>
        </div>
      </div>
      <img className="videoFooter__record" src="https://image.flaticon.com/icons/svg/3046/3046121.svg" alt=""/>

    </div>
  )
}

export {
  VideoFooter
}