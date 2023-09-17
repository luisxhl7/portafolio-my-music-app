import React, { useEffect, useState } from 'react'
import { Player } from '../../organisms/player/Player'
import { Navbar } from '../../organisms/Navbar/Navbar'
import { MainView } from '../../organisms/MainView'
import './Page-loyaout.scss'

export const PageLoyaut = ({children}) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const scrollableContainer = document.querySelector('.PageLoyaut__body-content');
    
        const handleScroll = () => {
          if (scrollableContainer.scrollTop > 250) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        scrollableContainer.addEventListener('scroll', handleScroll);
    
        return () => {
          scrollableContainer.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const mainViewClass = scrolled ? 'PageLoyaut__body-content scrolled' : 'PageLoyaut__body-content';
    
    return (
        <div className='PageLoyaut'>
            <main className='PageLoyaut__content'>
                <Navbar/>
                <section className={mainViewClass}>
                    <MainView/>
                    {children}
                </section>
            </main>
            <Player/>
        </div>
    )
}