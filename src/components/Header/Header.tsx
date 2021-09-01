import React from 'react'
import HeaderArrows from './components/HeaderArrows/HeaderArrows'
import HeaderBlock from './components/HeaderBlock/HeaderBlock'
import HeaderSearch from './components/HeaderSearch/HeaderSearch'
import './Header.scss'



const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <HeaderArrows />
        <HeaderSearch />
        <HeaderBlock />
      </div>
    </header>
  )
}

export default Header
