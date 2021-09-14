import React from 'react'
import { IoIosSkipBackward, IoIosSkipForward, IoIosPlay } from "react-icons/io";

import { Button } from '../../../UI/Button'
import { PlayerOption } from '../../../UI/PlayerOption';

const PlayerButtons = () => {
    return (


        <div className="player__btns">
            <PlayerOption addClass="player__btn-wrapper">
                <Button
                    typeButton="rounded"
                    addClass="player__btn"
                >
                    <IoIosSkipBackward className="player__btn-icon ion-icon" />
                </Button>
            </PlayerOption>

            <PlayerOption addClass="player__btn-wrapper">
                <Button
                    typeButton="rounded"
                    addClass="player__btn"
                >
                    <IoIosPlay className="player__btn-icon ion-icon" />

                </Button>
            </PlayerOption>

            <PlayerOption addClass="player__btn-wrapper">
                <Button
                    typeButton="rounded"
                    addClass="player__btn"
                >
                    <IoIosSkipForward className="player__btn-icon ion-icon" />

                </Button>
            </PlayerOption>





        </div>
    )
}

export default PlayerButtons
