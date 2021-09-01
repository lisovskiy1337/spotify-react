import React, {useState} from 'react'
import { IoIosArrowDown, IoIosArrowUp, IoIosAlbums, IoMdPeople, IoMdRadio } from "react-icons/io";
import SidebarNavigationCollapse from '../SidebarNavigationCollapse/SidebarNavigationCollapse';
import { SidebarNavigationListItemProps } from '../SidebarNavigationListItem/SidebarNavigationListItem';
import './SidebarNavigationList.scss'


interface sidebarNavigationprops  {
    title: string,
    iconName?: string,
    list : SidebarNavigationListItemProps[]

}


const SidebarNavigationList = ({title, list} : sidebarNavigationprops) => {

const [sidebarNav, setSidebarNav] = useState(false);
const [arrowNav, setArrowNav] = useState(false)

const showSidebarNav = () => {
    setSidebarNav(!sidebarNav);
}


  

    return (
        <>
            <div className="sidebar__navigation-list" onClick={showSidebarNav}>
                <span >{title}  
                {sidebarNav ?
                    (<IoIosArrowDown className="sidebar__navigation-arrow" />)
                    :
                    (<IoIosArrowUp className="sidebar__navigation-arrow" />)
                }
                </span>
                
                {sidebarNav && (
                    <SidebarNavigationCollapse list={list} title={title}/>
                )}
                

            </div>
        </>
    )
}

export default SidebarNavigationList
