import React from 'react'
import { IoMdMenu, IoMdShuffle, IoIosRefresh, IoIosPhonePortrait, IoIosVolumeHigh } from "react-icons/io";
import { Button } from '../../../UI/Button';
import { PlayerOption } from '../../../UI/PlayerOption';
import { ProgressBar } from '../../../UI/ProgressBar';

const PlayerOptions = () => {
    return (
        <div className="player__options">
            <PlayerOption addClass="player__option">
                <a href="#">Lyrics</a>
            </PlayerOption>
            <PlayerOption addClass="player__option">
                <Button typeButton="rounded">
                    <IoMdMenu className="player__option-icon ion-icon" />
                </Button>
            </PlayerOption>
            <PlayerOption addClass="player__option">
                <Button typeButton="rounded">
                    <IoIosRefresh className="player__option-icon ion-icon" />
                </Button>
            </PlayerOption>
            <PlayerOption addClass="player__option">
                <Button typeButton="rounded">
                    <IoMdShuffle className="player__option-icon ion-icon" />
                </Button>
            </PlayerOption>
            <PlayerOption addClass="player__option">
                <Button typeButton="rounded">
                    <IoIosPhonePortrait className="player__option-icon ion-icon" />devices Available
                </Button>
            </PlayerOption>
            <PlayerOption addClass="player__option">
                <IoIosVolumeHigh className="player__option-icon ion-icon" />
                <ProgressBar addClass="volume" progressColor="#c8c8c8">
                    <Button addClass="volume__hadler"></Button>
                </ProgressBar>
            </PlayerOption>

        </div>
    )
}

export default PlayerOptions
