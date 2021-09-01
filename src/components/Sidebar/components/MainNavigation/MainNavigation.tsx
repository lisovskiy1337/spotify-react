import React from 'react'
import SidebarNavigationList from '../SidebarNavigationList/SidebarNavigationList'
import {IoIosArrowDown, IoIosAlbums, IoMdPeople, IoMdRadio } from "react-icons/io";

const MainNavigation = () => {
    const mainNavigationData = [
        {title: 'rrqqwr', iconName: <IoMdPeople/>},
        {title: 'qrewgegg', iconName: <IoMdPeople/>}
    ]
    return (
        <SidebarNavigationList title="Main" list={mainNavigationData}/>
    )
}

export default MainNavigation
