import React from 'react'
import SidebarNavigationList from '../NavigationList/NavigationList'
import {IoIosArrowDown, IoIosAlbums, IoMdPeople, IoMdRadio } from "react-icons/io";
import { SidebarNavigationListItemProps } from '../NavigationListItem/NavigationListItem';
import { IconType } from 'react-icons/lib';

const MainNavigation = () => {
    const mainNavigationData : SidebarNavigationListItemProps[] = [
        {title: 'rrqqwr', iconName: <IoMdPeople/>},
        {title: 'qrewgegg', iconName: <IoMdPeople/>}
    ]
    return (
        <SidebarNavigationList title="Main" list={mainNavigationData}/>
    )
}

export default MainNavigation
