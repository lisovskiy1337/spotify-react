import React from 'react'
import Arrows from '../Arrows/Arrows'
import Search from '../Search/Search'
import './LeftSide.scss'

const LeftSide = () => {
    return (
        <div className="header__left">
            <Arrows />
            <Search />
        </div>
    )
}

export default LeftSide
