import React from 'react'
import './RelatedList.scss'
import RelatedListItem from '../RelatedListItem/RelatedListItem';

const RelatedList = () => {
    let relatedData = [
        {title:'Drake', img: './img/artist2.jpg', id: 1},
        {title:'A$ap Rocky', img: './img/artist2.jpg', id: 2},
        {title:'Travis Scott', img: './img/artist2.jpg', id: 3},
        {title:'Lil Baby', img: './img/artist2.jpg', id: 4},
    ];
    return (
        <ul className="overview__related-list">
            {relatedData.map(relatedItem => {
                    const {id, ...relatedItemProps} = relatedItem;
                    return (                     
                        <RelatedListItem 
                        key={id}
                        {...relatedItemProps}                           
                        />         
                    )
                   
                })}   
        </ul>
    )
}

export default RelatedList
