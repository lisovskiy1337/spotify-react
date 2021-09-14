import React from 'react'
import UserMoreListItem from '../UserMoreListItem/UserMoreListItem'

import './UserMoreList.scss'



const UserMoreList = () => {
    let headerUserActionsData = [
        {title: 'Private Session', id : 1},
        {title: 'Account', id : 2},
        {title: 'Settings', id : 3},
        {title: 'Log Out', id : 4},

    ]

    return (
        <ul className="header__user-more-list">
            { headerUserActionsData.map(item => {
                const {id, ...moreItemProps} = item;
                return (
                    <UserMoreListItem
                    key={id}
                    {...moreItemProps}/>
                    
                )
            })}
        </ul>
    )
}

export default UserMoreList
