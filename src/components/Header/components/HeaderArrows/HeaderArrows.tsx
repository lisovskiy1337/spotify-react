import React from 'react'

import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { Button } from '../../../UI/Button';
import './HeaderArrows.scss'

const HeaderArrows = () => {
    return (
        <div className="header__arrows">
            <Button 
                typeButton="rounded" 
                addClass="header__arrow-btn"    
            >
                <IoIosArrowBack className=" arrow-left ion-icon" />
            </Button>
            <Button 
                typeButton="rounded" 
                addClass="header__arrow-btn"  
                
            >
                <IoIosArrowForward className="arrow-right ion-icon" />
            </Button>
           
           
          </div>
    )
}

export default HeaderArrows
