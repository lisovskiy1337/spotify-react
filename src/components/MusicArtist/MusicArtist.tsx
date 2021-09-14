import React from 'react'
import MusicArtistInfo from './ArtistInfo/ArtistInfo'
import MusicArtistListeners from './ArtistListeners/ArtistListeners'
import MusicArtistNavigation from './ArtistNavigation/ArtistNavigation'
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
