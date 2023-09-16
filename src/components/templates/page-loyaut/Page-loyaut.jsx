import React from 'react'
import { Player } from '../../organisms/player/Player'
import { Navbar } from '../../organisms/Navbar/Navbar'
import './Page-loyaout.scss'
import { MainView } from '../../organisms/MainView'

export const PageLoyaut = ({children}) => {
    return (
        <div className='PageLoyaut'>
            <main className='PageLoyaut__content'>
                <Navbar/>
                <section className='PageLoyaut__body-content'>
                    <MainView/>
                    {children}
                </section>
            </main>
            <Player/>
        </div>
    )
}