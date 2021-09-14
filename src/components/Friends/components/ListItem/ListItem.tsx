import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import './ListItem.scss'

const FriendListItem = ({name} : {name: any}) => {
    return (
        <li className="social__list-item"><a href="#" className="social__list-link"><IoPersonSharp className="social__list-icon ion-icon"/>{name}</a></li>
    )
}

export default FriendListItem
