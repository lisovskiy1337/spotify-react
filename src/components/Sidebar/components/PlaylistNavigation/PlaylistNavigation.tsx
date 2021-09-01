import React from 'react'
import SidebarNavigationList from '../SidebarNavigationList/SidebarNavigationList'
import { SidebarNavigationListItemProps } from '../SidebarNavigationListItem/SidebarNavigationListItem'
import {IoIosArrowDown, IoIosAlbums, IoMdPeople, IoMdRadio } from "react-icons/io";

const PlaylistNavigation = () => {
    const playlistNavigationData : SidebarNavigationListItemProps[] = [
        {title: 'rrqqwr', iconName:  <IoIosAlbums/>},
        {title: 'qrewgegg', iconName:  <IoIosAlbums/>}
    ]
    return (
        <SidebarNavigationList title="Your Playlist" list={playlistNavigationData}/>
    )
}

export default PlaylistNavigation