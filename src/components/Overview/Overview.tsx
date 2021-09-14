import React from 'react'
import AlbumOverview from '../Album/Overview/Overview'
import Artist from './Artist/Artist'
import Related from './Related/Related'





const Overview = () => {
    return (
        <div className="overview">
        <div className="overview__row">
            <Artist/>
            <Related/>
        </div>
         
        <AlbumOverview/>
        </div>
    )
}

export default Overview
