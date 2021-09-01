import React from 'react'
import MusicArtistInfo from './components/MusicArtistInfo/MusicArtistInfo'
import MusicArtistListeners from './components/MusicArtistListeners/MusicArtistListeners'
import MusicArtistNavigation from './components/MusicArtistNavigation/MusicArtistNavigation'
import './MusicArtist.scss'


const MusicArtist = () => {
  return (
    <div className="music__artist">
      <div className="music__inner">
        <MusicArtistInfo />
        <MusicArtistListeners />
      </div>
      <MusicArtistNavigation />


    </div>
  )
}

export default MusicArtist;
