import React from 'react'

import AlbumTrack from '../Track/Track';
import AlbumTrackHead from '../TrackHead/TrackHead';
import './TrackList.scss'

const AlbumTrackList = () => {
    let trackData = [
        {title: 'Me, Myself & I', id: 1, length: '1:44', explicit: true },
        {title: 'Bandit', id: 2, length: '2:44', explicit: true },
        {title: 'Liliya', id: 3, length: '3:44', explicit: true },
        {title: 'Hotbox', id: 4, length: '4:44', explicit: true }
    ]

    return (
        <div className="album__tracks">
            <AlbumTrackHead/>
                <>
                {trackData.map(track => {
                    const {id, ...trackProps} = track;
                    return (                     
                        <AlbumTrack 
                        key={id}
                        {...trackProps}                           
                        />         
                    )
                   
                })}   
                </>
              
              
        </div>
    )
}

export default AlbumTrackList
