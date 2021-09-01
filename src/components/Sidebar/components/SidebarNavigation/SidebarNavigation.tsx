import React from 'react'
import {IoIosArrowDown} from "react-icons/io";
import MainNavigation from '../MainNavigation/MainNavigation';
import MusicNavigation from '../MusicNavigation/MusicNavigation';
import PlaylistNavigation from '../PlaylistNavigation/PlaylistNavigation';
import SidebarNavigationList from '../SidebarNavigationList/SidebarNavigationList';

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



// <div className="sidebar__navigation-list"><span>Your music<IoIosArrowDown className="sidebar__navigation-arrow" />
// </span>
//     {/* <ul class="sidebar__navigation-collapse">
// <li class="sidebar__navigation-item"><a href="" class="sidebar__navigation-link">DADDAD</a></li>
// <li class="sidebar__navigation-item"><a href="" class="sidebar__navigation-link">DSDAS</a></li>
//   <li class="sidebar__navigation-item"><a href="" class="sidebar__navigation-link">asdDDAD</a></li>
// </ul> */}
// </div>
// <div className="sidebar__navigation-list"><span>Playlist <IoIosArrowDown className="sidebar__navigation-arrow" />
// </span>
//     {/* <ul class="sidebar__navigation-collapse">
// <li class="sidebar__navigation-item"><a href="" class="sidebar__navigation-link">DADDAD</a></li>
// <li class="sidebar__navigation-item"><a href="" class="sidebar__navigation-link">DSDAS</a></li>
// <li class="sidebar__navigation-item"><a href="" class="sidebar__navigation-link">asdDDAD</a></li>
// </ul> */}
// </div>