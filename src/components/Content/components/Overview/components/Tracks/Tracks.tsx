import React from 'react'
import { Button } from '../../../../../UI/Button'
import TrackList from '../TrackList/TrackList'

import './Tracks.scss'

const Tracks = () => {
    return (
        <div className="tracks">
            <p className="tracks-title sm-title">LATEST RELEASE</p>
            <TrackList />
            <Button
                typeButton="rect"
                addClass="tracks__more-btn"
                borderColor="#c8c8c8"
                textColor="#c8c8c8"
                hoverBorder="#fff"
                hoverText="#fff"
            >
                show 5 more
            </Button>
        </div>
    )
}

export default Tracks
