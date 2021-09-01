import React from 'react'
import AlbumOverview from '../Album/components/AlbumOverview/AlbumOverview'
import OverviewArtist from './components/OverviewArtist/OverviewArtist'
import OverviewRelated from './components/OverviewRelated/OverviewRelated'





const Overview = () => {
    return (
        <div className="overview">
        <div className="overview__row">
            <OverviewArtist/>
            <OverviewRelated/>
        </div>
         
        <AlbumOverview/>
        </div>
    )
}

export default Overview
