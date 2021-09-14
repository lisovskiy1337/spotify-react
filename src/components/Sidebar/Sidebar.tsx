import React from 'react'
import "./Sidebar.scss"
import { IoIosArrowDown, IoIosAlbums, IoMdPeople, IoMdRadio, IoIosAddCircleOutline, IoIosCheckmark } from "react-icons/io";
import SidebarNavigation from './components/Navigation/Navigation';
import SidebarPlaylist from './components/Playlist/Playlist';
import SidabarSong from './components/Song/Song';

const Sidebar = () => {
  return (

    <section className="sidebar">
      <SidebarNavigation />
      <SidebarPlaylist />
      <SidabarSong />
    </section>

  )
}

export default Sidebar
