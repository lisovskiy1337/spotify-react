import React from 'react'

const PlayerProgress = () => {
    return (
        <div className="player__progress">
            <p className="player__progress-currenttime">0:01</p>
            <div className="player__progress-line">
                <div className="player__progress-handler" />
            </div>
            <p className="player__progress-alltime">3:01</p>
        </div>
    )
}

export default PlayerProgress
