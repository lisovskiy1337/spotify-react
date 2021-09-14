import React from 'react'
import MusicArtistFriends from '../ArtistFriends/ArtistFriends'
import MusicArtistNavList from '../ArtistNavList/ArtistNavList'
import './ArtistNavigation.scss'

const MusicArtistNavigation = () => {
    return (
        <div className="music__artist-navigation">
            <MusicArtistNavList/>
            <MusicArtistFriends/>
            
        </div>
    )
}

export default MusicArtistNavigation
