import React from 'react'

import { IoIosPlay} from "react-icons/io";
import { Button } from '../../UI/Button';
import './ArtistInfo.scss'

const MusicArtistInfo = () => {
    return (
        <div className="music__artist-info">
            <div className="music__artist-imgblock">
                <img src="./img/artist2.jpg" alt="" className="music__artist-img" />
            </div>
            <div className="music__artist-meta">
                <p className="music__artist-type">rqqwrrqw</p>
                <p className="music__artist-name">qwrwqrr</p>
                <div className="music__artist-action">
                    
                    <Button
                        typeButton="rect"
                        addClass="music__artist-action-btn"
                        bgColor="#1ed760"
                        borderColor="#1ed760"
                        textColor="#fff"
                        hoverBorder="#4bfb8a">
                        <IoIosPlay className="music__artist-action-icon ion-icon" />
                        plays
                    </Button>

                    <Button
                        typeButton="rect"
                        addClass="music__artist-action-btn"
                        borderColor="#c8c8c8"
                        textColor="#c8c8c8"
                        hoverBorder="#fff"
                        hoverText="#fff"
                    >
                        follow
                    </Button>

                    <Button
                        typeButton="rounded"
                        addClass="music__artist-action-btn"
                        borderColor="#c8c8c8"
                        textColor="#c8c8c8"
                        hoverBorder="#fff"
                        hoverText="#fff"
                    >
                        ...
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MusicArtistInfo;
