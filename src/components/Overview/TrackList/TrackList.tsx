import React from 'react'
import TrackListItem from '../TrackListItem/TrackListItem';
import './TrackList.scss'


const TrackList = () => {

    let tracksData = [
        {title: 'Me, Myself & I', id: 1, img: './img/artist2.jpg', plays: '144,325'},
        {title: 'Bandit', id: 2, img: './../../img/song1.jpg', plays: '268,325'},
        {title: 'Liliya', id: 3, img: './../../img/song1.jpg', plays: '544,325'},
        {title: 'Hotbox', id: 4, img: './../../img/song1.jpg', plays: '883,325'}
    ]
    return (
        <ul className="tracks__list">
            {tracksData.map(track => {
                    const {id, ...trackProps} = track;
                    return (                     
                        <TrackListItem
                        key={id}
                        {...trackProps}                           
                        />         
                    )
                   
                })}   
        </ul>
    )
}

export default TrackList
