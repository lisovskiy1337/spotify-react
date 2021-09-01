import React from 'react'
import MusicArtistNavListItem from '../MusicArtistNavListItem/MusicArtistNavListItem'
import './MusicArtistNavList.scss'

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
