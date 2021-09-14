import React from 'react'

import "./Content.scss"



import MusicArtist from '../MusicArtist/MusicArtist';
import Overview from '../Overview/Overview';



const Content = () => {
  return (
    <section className="music">
      <MusicArtist />
      <Overview />

    </section>
  )
}

export default Content
