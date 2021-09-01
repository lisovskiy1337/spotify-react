import React from 'react'
import { IoIosAddCircleOutline} from "react-icons/io";
import './SidebarPlaylist.scss'


const SidebarPlaylist = () => {
    return (
        <div className="sidebar__playlist">
            <a href="#" className="sidebar__playlist-link">
                <IoIosAddCircleOutline className="sidebar__playlist-img ion-icon" />New Playlist
            </a>
        </div>
    )
}

export default SidebarPlaylist;
