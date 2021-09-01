import React from 'react'
import { IoMdCheckmark} from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import './AlbumTrack.scss';

interface AlbumTrackProps {
    title: string,
    length: string,
    explicit: boolean

}

const AlbumTrack = ({title, length, explicit} : AlbumTrackProps) => {

    return (
        <div className="album__track">
                <div className="album__track-number">1</div>
                <div className="album__track-added"><IoMdCheckmark className="album__track-added-icon ion-icon" /></div>
                <div className="album__track-title">{title}</div>   

                {explicit && (
                    <div className="album__track-explicit explicit">explicit</div>
                    )               
                }
           
                <div className="album__track-time">{length}</div>
                <div className="album__track-popularity"><IoBarChart className="album__track-popularity-icon ion-icon"/></div>
              </div>
    )
}

export default AlbumTrack;






 