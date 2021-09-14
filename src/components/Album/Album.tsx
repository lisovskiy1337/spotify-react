import React from 'react'
import { Button } from '../../../UI/Button';
import AlbumTrackList from './TrackList/TrackList';
import './Album.scss'




const Album = () => {
    return (
        <div className="album">
            <div className="album__info">
                <div className="album__imgblock">
                    <img src="./img/song1.jpg" alt="" className="album__img" />
                </div>
                <div className="album__info-meta ">
                    <p className="album__info-year">14414</p>
                    <p className="album__info-name">wewer</p>
                    <div className="album__actions">
                    
                    <Button 
                        typeButton="rect" 
                        addClass="album__actions-btn" 
                        borderColor="#c8c8c8" 
                        textColor="#c8c8c8" 
                        hoverBorder="#fff" 
                        hoverText="#fff"
                    >
                    save
                    </Button>
                    <Button 
                        typeButton="rounded" 
                        addClass="album__actions-btn" 
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
            <AlbumTrackList/>
        </div>
    )
}

export default Album
