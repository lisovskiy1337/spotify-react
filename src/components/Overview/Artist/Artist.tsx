import React from 'react'
import Latest from '../Latest/Latest';

import TrackList from '../TrackList/TrackList'
import Tracks from '../Tracks/Tracks';
import './Artist.scss'


const Artist = () => {
    return (
        <>
            <div className="overview__artist">
                <p className="overview__artist-title sm-title">LATEST RELEASE</p>
                <Latest />
                <Tracks />
            </div>


        </>

    )
}

export default Artist;
