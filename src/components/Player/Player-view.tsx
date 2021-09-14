import React from 'react'
import "./Player.scss"
import PlayerOptions from './components/Options/Options';
import PlayerProgress from './components/Progress/Progress';
import PlayerButtons from './components/Buttons/Buttons';

const  Player = () => {
    return (
        <div className="player">
        <div className="player__inner">
          <PlayerButtons/>
          <PlayerProgress/>
          <PlayerOptions/>
        </div>
      </div>
    )
}

export default Player
