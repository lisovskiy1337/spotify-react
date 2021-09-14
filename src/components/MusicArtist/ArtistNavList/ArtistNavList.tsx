import React from 'react'
import MusicArtistNavListItem from '../ArtistNavListItem/ArtistNavListItem'
import './ArtistNavList.scss'

const MusicArtistNavList = () => {
    let musicArtistNavListData = [
        { title: 'overview' },
        { title: 'related artists' }
    ]
    return (
        <ul className="music__artist-navlist">
            {musicArtistNavListData.map((item, index) => {
                const { ...musicArtistNavListProps } = item;
                return (
                    <MusicArtistNavListItem key={index} {...musicArtistNavListProps}/>
                )
            })}


        </ul>
    )
}

export default MusicArtistNavList
