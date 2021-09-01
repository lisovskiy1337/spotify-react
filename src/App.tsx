import React from 'react'

import './app.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Player from './components/Player/Player'


const App = () => {

  
  return (
    <div className="app">
        <Header/>
        <Main/>
        <Player/>
    </div>
  )
}

export default App
