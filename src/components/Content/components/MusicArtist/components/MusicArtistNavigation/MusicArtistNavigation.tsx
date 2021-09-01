import React from 'react'
import MusicArtistFriends from '../MusicArtistFriends/MusicArtistFriends'
import MusicArtistNavList from '../MusicArtistNavList/MusicArtistNavList'
import './MusicArtistNavigation.scss'

const MusicArtistNavigation = () => {
    return (
        <div className="music__artist-navigation">
            <MusicArtistNavList/>
            <MusicArtistFriends/>
            
        </div>
    )
}

export default MusicArtistNavigation
