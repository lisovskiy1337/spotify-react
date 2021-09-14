import React from 'react'
import FriendListItem from '../ListItem/ListItem'
import './List.scss'

const FriendList = () => {

    let socialData = [
        {name: 'John Hovewer', id: 1},
        {name: 'Smith Row', id: 2},
        {name: 'Margo Robbie', id: 3},
        {name: 'Bla Bla', id: 4}

    ]
    
          
        return ( 
            <ul className="social__list">   

                {socialData.map(socialItem => {
                    const {id, ...itemProps} = socialItem;
                    return (                     
                        <FriendListItem 
                        key={id}
                        {...itemProps}                           
                        />         
                    )
                   
                })}   
              
 
            </ul>
        );
 
}

export default FriendList
