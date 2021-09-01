import React, {useState} from 'react'
import {IoIosArrowDown, IoIosAlbums, IoMdPeople, IoMdRadio } from "react-icons/io";
import SidebarNavigationListItem, { SidebarNavigationListItemProps } from '../SidebarNavigationListItem/SidebarNavigationListItem';
import './SidebarNavigationCollapse.scss'



interface SidebarCollapseProps {
    title: string,
    iconName?: string,
    list : SidebarNavigationListItemProps[]
}

const SidebarNavigationCollapse = ({list, title} : SidebarCollapseProps) => {
   
    return (
        <ul className="sidebar__navigation-collapse" >
            {list.map(item => {
                    return (
                        <SidebarNavigationListItem
                        
                        {...item}
                        />
                    )
                    })}
        </ul>
    )
}

export default SidebarNavigationCollapse;



