import React from 'react'
import { IoMdTime, IoIosThumbsUp } from "react-icons/io";
import './AlbumTrackHead.scss'

const AlbumTrackHead = () => {
    return (
        <div className="album__tracks-head">
            <div className="album__tracks-number">#</div>
            <div className="album__tracks-title">SONG</div>
            <div className="album__tracks-time"><IoMdTime className="album__tracks-time-icon ion-icon"/></div>
            <div className="album__tracks-popularity"><IoIosThumbsUp className="album__tracks-popularity-icon ion-icon" /></div>
        </div>
    )
}

export default AlbumTrackHead
