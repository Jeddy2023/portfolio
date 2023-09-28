import React from 'react';
import "./home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Profile from '../../assets/profilesvg.avif'

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Profile} alt="" className="home__img" />
        <h1 className="home__name">Jedidiah Ken - Osuh</h1>
        <span className="home__education">I am a Front - End Web developer</span>

        <HeaderSocials />

        <a href="#contact" className='btn'>Hire Me</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home