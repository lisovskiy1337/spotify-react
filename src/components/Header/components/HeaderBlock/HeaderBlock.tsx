import React from 'react'
import HeaderMore from '../HeaderMore/HeaderMore'
import HeaderNotifications from '../HeaderNotifications/HeaderNotifications'
import HeaderUser from '../HeaderUser/HeaderUser'
import './HeaderBlock.scss'


const HeaderBlock = () => {
    return (
        <div className="header__user-block">
            <HeaderNotifications/>
            <HeaderUser/>     
            <HeaderMore/>
        </div>  
    )
}

export default HeaderBlock
