import React from 'react'
import { IconType } from 'react-icons';
import { IoIosArrowDown, IoIosAlbums, IoMdPeople, IoMdRadio, IoIosAddCircleOutline, IoIosCheckmark } from "react-icons/io";
import './NavigationListItem.scss'

export interface SidebarNavigationListItemProps {
    title: string,
    iconName: JSX.Element,
}

const SidebarNavigationListItem = ({title, iconName} : SidebarNavigationListItemProps) => {
    
    return (
        <li className="sidebar__navigation-item">
            <a href="#" className="sidebar__navigation-link">
                {iconName} {title}
            </a>
        </li>
    )
}

export default SidebarNavigationListItem;

