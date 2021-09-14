import React from 'react'
import {IoIosArrowDown} from "react-icons/io";
import MainNavigation from '../MainNavigation/MainNavigation';
import MusicNavigation from '../MusicNavigation/MusicNavigation';
import PlaylistNavigation from '../PlaylistNavigation/PlaylistNavigation';
import './Navigation.scss'

const SidebarNavigation = () => {

    return (
        <div className="sidebar__navigation">
            <div className="sidebar__navigation-inner">
                <MainNavigation/>
                <MusicNavigation/>
                <PlaylistNavigation/>              
            </div>
        </div>
    )
}

export default SidebarNavigation


