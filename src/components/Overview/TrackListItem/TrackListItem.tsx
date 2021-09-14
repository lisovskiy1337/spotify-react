import React from 'react'
import {IoMdCheckmark} from "react-icons/io";
import './TrackListItem.scss';

interface TrackListItemProps {
    title: string,
    img: string,
    plays: string
}
const TrackListItem = ({title, img, plays} : TrackListItemProps) => {
    return (
        
            <li className="tracks__list-item">
                <div className="tracks__list-imgblock">
                    <img src={img} alt="" className="tracks__list-img" />
                </div>
                <p className="tracks__list-number">1</p>
                <button className="tracks__list-added"><IoMdCheckmark className="tracks__list-added-icon ion-icon"/></button>
                <div className="tracks__list-title">{title}</div>
                <div className="tracks__list-explicit explicit">EXPLICIT</div>
                <div className="tracks__list-plays">{plays}</div>
            </li>

    )
}

export default TrackListItem

