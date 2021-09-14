import React, { useState } from 'react'


import { IoIosArrowDown } from "react-icons/io";
import { Button } from '../../../UI/Button';

import UserMoreList from '../UserMoreList/UserMoreList';
import './More.scss'


// interface ThisProps {
//     style: string,
//     moreList: boolean
// }


const More = () => {

    const [moreList, setmoreList] = useState(false);

    const showMoreList = () => setmoreList(!moreList);

    return (
        <div className="header__user-more" onClick={showMoreList}>
            <Button
                typeButton="rect"
                addClass="header__user-more-btn"

            >
                <IoIosArrowDown className="header__user-more-icon ion-icon" />
            </Button>
            {moreList && (
                <UserMoreList/>
            )}
            
        </div>
    )
}

export default More
