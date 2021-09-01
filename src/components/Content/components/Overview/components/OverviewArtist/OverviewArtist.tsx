import React from 'react'
import { Button } from '../../../../../UI/Button';


import TrackList from '../TrackList/TrackList'
import Tracks from '../Tracks/Tracks';
import './OverviewArtist.scss'


const OverviewArtist = () => {
    return (
        <>
            <div className="overview__artist">
                <p className="overview__artist-title sm-title">LATEST RELEASE</p>
                <div className="overview__latest">
                    <div className="overview__latest-imgblock">
                        <img src="./img/song1.jpg" alt="" className="overview__latest-img" />
                    </div>
                    <div className="overview__latest-song">
                        <div className="overview__latest-song-name">qrrqr</div>
                        <div className="overview__latest-song-date">124142214</div>
                    </div>
                </div>
               <Tracks/>
            </div>


        </>

    )
}

export default OverviewArtist;
