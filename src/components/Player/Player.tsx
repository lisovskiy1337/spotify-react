import React from 'react'
import "./Player.scss"
import PlayerOptions from './components/PlayerOptions/PlayerOptions';
import PlayerProgress from './components/PlayerProgress/PlayerProgress';
import PlayerButtons from './components/PlayerButtons/PlayerButtons';

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
