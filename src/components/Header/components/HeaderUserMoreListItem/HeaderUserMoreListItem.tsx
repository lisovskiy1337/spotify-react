import React from 'react'
import './HeaderUserMoreListItem.scss'

const HeaderUserMoreListItem = ({title} : {title: string}) => {
    return (
        <li className="header__user-more-item"><a href="#" className="header__user-more-link">{title}</a></li>
    )
}

export default HeaderUserMoreListItem
