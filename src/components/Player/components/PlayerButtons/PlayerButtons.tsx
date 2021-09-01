import React from 'react'
import { IoIosSkipBackward, IoIosSkipForward, IoIosPlay} from "react-icons/io";

import { Button } from '../../../UI/Button'

const PlayerButtons = () => {
    return (

        <div className="player__btns">
            <Button
                typeButton="rounded"
                addClass="player__btn"
            >
                <IoIosSkipBackward className="player__btn-icon ion-icon" />
            </Button>
            <Button
                typeButton="rounded"
                addClass="player__btn"
            >
                <IoIosPlay className="player__btn-icon ion-icon" />

            </Button>
            <Button
                typeButton="rounded"
                addClass="player__btn"
            >
                <IoIosSkipForward className="player__btn-icon ion-icon" />

            </Button>


        </div>
    )
}

export default PlayerButtons
