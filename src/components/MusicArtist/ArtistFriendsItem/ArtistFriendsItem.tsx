import React from 'react'
import './ArtistFriendsItem.scss'

interface musicArtistFriendsProps {
    title: number
}

const MusicArtistFriendsItem = ({title} : musicArtistFriendsProps) => {
    return (
        <a href="/#" className="music__artist-friend-link">{title}</a>
    )
}

export default MusicArtistFriendsItem
