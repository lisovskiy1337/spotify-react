import React from 'react'
import { IoMdMenu, IoMdShuffle, IoIosRefresh, IoIosPhonePortrait, IoIosVolumeHigh } from "react-icons/io";
import { Button } from '../../../UI/Button';

const PlayerOptions = () => {
    return (
        <div className="player__options">
            <div className="player__option"><a href="#">Lyrics</a> </div>
            <div className="player__option">
                <Button typeButton="rounded">
                    <IoMdMenu className="player__option-icon ion-icon" />
                </Button>
            </div>
            <div className="player__option"><Button typeButton="rounded">
                <IoIosRefresh className="player__option-icon ion-icon" />
            </Button>
            </div>
            <div className="player__option"><Button typeButton="rounded">
                <IoMdShuffle className="player__option-icon ion-icon" />
            </Button>
            </div>
            <div className="player__option devices"><Button typeButton="rounded">
                <IoIosPhonePortrait className="player__option-icon ion-icon" />devices Available

            </Button>
            </div>
            <div className="player__option">
                <IoIosVolumeHigh className="player__option-icon ion-icon" />
                <div className="volume">
                    <Button addClass="volume__hadler"></Button>
                </div>
            </div>
        </div>
    )
}

export default PlayerOptions
