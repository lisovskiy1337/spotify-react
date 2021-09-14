import React from 'react'
import { IoIosCheckmark } from "react-icons/io";
import './Song.scss'


const SidabarSong = () => {
    return (
        <div className="sidebar__song">
            <div className="sidebar__song-imgblock">
                <img src="./img/artist1.jpg" alt="" className="sidebar__song-img" />
            </div>
            <div className="sidebar__song-info">
                <a href="#" className="sidebar__song-title-link">
                    Some Type of Love</a>
                <a href="#" className="sidebar__song-artist-link">
                    Some Type of Love</a>
            </div>
            <div className="sidebar__addsong">
                <button className="sidebar__addsong-btn">
                    <IoIosCheckmark className="sidebar__addsong-icon ion-icon" />
                </button>
            </div>
        </div>
    )
}

export default SidabarSong
