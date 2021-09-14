import React from 'react'
import "./Friends.scss"

import { Button } from '../UI/Button';
import FriendList from './components/List/List';

const Friends = () => {
    return (
        <section className="social">
        <div className="social__inner">
          <FriendList/>
          <Button 
            typeButton="rect" 
            addClass="social__friends-btn" 
            borderColor="#c8c8c8" 
            textColor="#c8c8c8" 
            hoverBorder="#fff" 
            hoverText="#fff"
            >
            find friends
          </Button>
        </div>
      </section>
    )
}

export default Friends
