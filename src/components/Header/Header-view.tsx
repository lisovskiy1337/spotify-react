import React from 'react'
import Block from './components/Block/Block'
import LeftSide from './components/LeftSide/LeftSide'
import './Header.scss'



const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <LeftSide/>
        <Block/>
      </div>
    </header>
  )
}

export default Header
