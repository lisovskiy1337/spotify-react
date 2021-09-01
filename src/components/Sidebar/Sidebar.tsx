import React from 'react'
import "./Sidebar.scss"
import { IoIosArrowDown, IoIosAlbums, IoMdPeople, IoMdRadio, IoIosAddCircleOutline, IoIosCheckmark } from "react-icons/io";
import SidebarNavigation from './components/SidebarNavigation/SidebarNavigation';
import SidebarPlaylist from './components/SidebarPlaylist/SidebarPlaylist';
import SidabarSong from './components/SidebarSong/SidabarSong';

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
