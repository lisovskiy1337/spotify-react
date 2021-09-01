import React from 'react'
import './MusicArtistNavListItem.scss'

interface musicArtistNavListProps {
    title: string
}

const MusicArtistNavListItem = ({title} : musicArtistNavListProps) => {
    return (
        <li className="music__artist-navlist-item">
            <a href="/#" className="music__artist-navlist-link">{title}</a>
        </li>
    )
}

export default MusicArtistNavListItem
