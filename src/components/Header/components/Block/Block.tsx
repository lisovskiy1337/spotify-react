import React from 'react'
import More from '../More/More'
import Notifications from '../Notifications/Notifications'
import User from '../User/User'

import './Block.scss'


const Block = () => {
    return (
        <div className="header__user-block">
            <Notifications/>
            <User/>     
            <More/>
        </div>  
    )
}

export default Block
