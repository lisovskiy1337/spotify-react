import React from 'react'
import { IoIosNotifications, IoMdArchive} from "react-icons/io";
import { Button } from '../../../UI/Button';
import './Notifications.scss'

const Notifications = () => {
    return (
        <>
            <div className="header__user-notification">
                <Button 
                    typeButton="rounded" 
                    addClass="header__user-btn notification--btn"    
                >
                    <IoIosNotifications  className="header__user-icon ion-icon"/>
                </Button>            
            </div>
            <div className="header__user-inbox">
                <Button 
                    typeButton="rounded" 
                    addClass="header__user-btn inbox--btn"    
                >
                <IoMdArchive className="header__user-icon ion-icon"/>
                </Button>                
            </div>
        </>
    )
}

export default Notifications;
