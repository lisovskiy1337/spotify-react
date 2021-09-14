import React from 'react'
import MusicArtistFriendsItem from '../ArtistFriendsItem/ArtistFriendsItem'
import './ArtistFriends.scss'

const MusicArtistFriends = () => {
    let musicArtistFriendsData = [
        {title: 1},
        {title: 2},
        {title: 3}
    ]
    return (
        <div className="music__artist-friends">
            {musicArtistFriendsData.map((item, index) =>{
                const {...musicArtistFriendsProps} = item;
                return (
                    <MusicArtistFriendsItem key={index} {...musicArtistFriendsProps}/>
                )
            })}
               
            </div>
    )
}

export default MusicArtistFriends
