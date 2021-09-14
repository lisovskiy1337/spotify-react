import React from 'react'
import {IoMdList, IoIosApps} from "react-icons/io";
import { Button } from '../../UI/Button';
import Album from '../Album';
import './Overview.scss'



const AlbumOverview = () => {
    return (
        <div className="album-overview">
            <div className="album__head">
                <p className="album__head-title sm-title">Albums</p>
                <div className="album__head-view">
                
                    <Button 
                    typeButton="rounded" 
                    addClass="album__head-view-btn"    
                    >
                    <IoMdList className="album__head-view-icon ion-icon"/>
                    </Button>

                    <Button 
                    typeButton="rounded" 
                    addClass="album__head-view-btn"    
                    >
                    <IoIosApps className="album__head-view-icon ion-icon"/>
                    </Button> 
                </div>
            </div>
            <Album/>
        </div>
    )
}

export default AlbumOverview
