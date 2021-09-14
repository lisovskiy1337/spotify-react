import React from 'react'
import { ProgressBar } from '../../../UI/ProgressBar'

const PlayerProgress = () => {
    return (
        <div className="player__progress">
            <p className="player__progress-currenttime">0:01</p>
            <ProgressBar addClass="player__progress-line" >
                <div className="player__progress-handler" />
            </ProgressBar>
            <p className="player__progress-alltime">3:01</p>
        </div>
    )
}

export default PlayerProgress
