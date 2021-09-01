import React from 'react'
import HeaderUserMoreListItem from '../HeaderUserMoreListItem/HeaderUserMoreListItem';
import './HeaderUserMoreList.scss'



const HeaderUserMoreList = () => {
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
                    <HeaderUserMoreListItem
                    key={id}
                    {...moreItemProps}/>
                )
            })}
        </ul>
    )
}

export default HeaderUserMoreList
