import React from 'react'

import "./Content.scss"


import Overview from './components/Overview/Overview';
import MusicArtist from './components/MusicArtist/MusicArtist';


const Content = () => {
    return (
      <section className="music">
        <MusicArtist/>
        <Overview/>
        
      </section>
    )
}

export default Content
