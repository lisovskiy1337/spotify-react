import React from 'react'
import './RelatedListItem.scss'

interface RelatedListItemProps {
    title: string,
    img: string
}

const RelatedListItem = ({title, img} : RelatedListItemProps) => {
    return (
        <li className="overview__related-list-item"><a href="/#">
        <div className="overview__related-imgblock">
            <img src={img} alt="" className="overview__related-img" />
        </div>
        <p className="overview__related-name">{title}</p>
        </a>
    </li>
    )
}

export default RelatedListItem
