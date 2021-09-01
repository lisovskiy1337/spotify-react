import React from 'react'
import SidebarNavigationList from '../SidebarNavigationList/SidebarNavigationList'
import { SidebarNavigationListItemProps } from '../SidebarNavigationListItem/SidebarNavigationListItem'
import {IoIosArrowDown, IoIosAlbums, IoMdPeople, IoMdRadio } from "react-icons/io";

const MusicNavigation = () => {
    const musicNavigationData : SidebarNavigationListItemProps[] = [
        {title: 'rrqqwr', iconName:  <IoMdRadio/>},
        {title: 'ууууууу', iconName:  <IoMdRadio/>}
    ]
    return (
        <SidebarNavigationList title="Your Music" list={musicNavigationData}/>
    )
}

export default MusicNavigation