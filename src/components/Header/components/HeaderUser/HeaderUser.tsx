import React from 'react'
import './HeaderUser.scss'

const HeaderUser = () => {
    return (
        <div className="header__user">
                <div className="header__user-imgblock">
                    <img src="../../img/person1.jpg" alt="" className="header__user-img" />
                </div>
                <div className="header__user-info"><span>Adam Blabla</span></div>
            </div>    
    )
}

export default HeaderUser
