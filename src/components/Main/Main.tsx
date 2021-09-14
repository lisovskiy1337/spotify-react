import React from 'react'
import "./Main.scss"
import Content from '../Content/Content'
import Friends from '../Friends/Friends-view'
import Sidebar from '../Sidebar/Sidebar'

const Main = () => {
    return (
        
            <main className="main-content">
                <section className="content">
                    <Sidebar/>
                    <Content/>
                    <Friends/>
                </section>
            </main>
    )
}

export default Main
