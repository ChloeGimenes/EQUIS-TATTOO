import React, { Component } from 'react';
import ScrollToTop from "react-scroll-to-top";
import "react-scroll-to-top/lib/index.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import ScrollReveal from 'scrollreveal';
// import FadeIn from "react-fade-in";
import Fade from 'react-reveal/Fade';
import easyScroll from 'easy-scroll';
import Svg from './Svg'


import Contact from './Contact';
import logo from './assets/images/malou.png';
import logo1 from './assets/images/body.png';
import logo2 from './assets/images/dog.png';
import logo3 from './assets/images/landscapes.png';
import logo4 from './assets/images/pot.png';
import logo5 from './assets/images/love.png';
import logo6 from './assets/images/skating.png';
import logo7 from './assets/images/illu.png';
import logo8 from './assets/images/pizza.png';
import './App.css';








function App () {
 
  //   scroll = () => {
  
  //   const body = document.body,
   
  //   scrollWrap = document.getElementsByClassName("smooth-scroll-wraper") [0],
  //   height = scrollWrap.getBoundingClientRect().height - 1,
  //   speed = 0.04;

  //   var offset=0;

  //   body.style.height = Math.floor(height) + "px";




  //   const smoothScroll = () => {
  //     offset += (window.pageYOffset) * speed;

  //     var scroll = "translateY(-"+ offset +"px) translateZ(0)";
  //     scrollWrap.style.transform = scroll;

  //     // callScroll = requestAnimationFrame(smoothScroll)

  //   }

  // smoothScroll();

  // }

  // componentDidMount() {
  //   this.scroll();
  // }



  return (

    <div className="smooth-scroll-wrapper">
      <div className="App">

        <div className="App-header">
          <div className="App-header-socials">
                <a href="https://www.instagram.com/equis.skate/"><p className="social">Instagram</p></a>
                <a href="https://www.facebook.com/equis.skate"><p className="social">Facebook</p></a>
              </div>

              {/* <div className="App-name">
                <p>TATTOO ARTIST<br/>BASED<br/>IN FRANCE</p>
              </div> */}


           <Svg />

          </div>
      <div className="App-main">
        <ScrollToTop smooth="true"/>
          <div className="App-header-title">
            <p className="title">EQUIS TATTOO</p>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
          <div className="menu">
            <p><AnchorLink href='#intro' className="menu1">&nbsp;ABOUT</AnchorLink></p>
            <p><AnchorLink href='#works' className="menu2">&nbsp;&nbsp;WORKS</AnchorLink></p>
            <p><AnchorLink href='#contactme' className="menu3" >&nbsp;&nbsp;&nbsp;CONTACT</AnchorLink></p>
          </div>
       
          <div id="intro">
            <p className="App-introduction">HI, I AM A FRENCH ARTIST PASSIONATE BY ART TATTOO,<br/> ILLUSTRATION, SKATEBOARDING AND ARCHITECTURE.<br/>I LOVE TO MIX THEM UP AND CROSSING NEW BOUNDARIES. I GIVE IMPORTANCE IN<br/>EXPLORING FEMALE GENDERS AND QUEER IDENTITIES<br/>AS A SOURCE OF INSPIRATION. THROUGH MY WORKS<br/>I LOVE TO HIGHLIGHT WOMEN FIGHT FOR EQUALITY. IN EVERY GENDERS<br/>AND NATIONALITIES. UNDERGROUND CULTURE AND TRIPS ALSO HAVE<br/>A GREAT INFLUENCE ON MY PRODUCTIONS<br/>I DO MANY EXHIBITIONS IN DIFFERENTS PLACES.<br/>I AM ALWAYS READY FOR NEW PROJECTS AND OTHER PERSPECTIVES.<br/>MAINLY BASED IN BORDEAUX, NANTES AND PARIS.  </p>
          </div>
      
        <section >
          <div id="works" className="App-images">
            <Fade bottom cascade>
              <img src={logo1} className="App-logos decal1" alt="logo" />
              <img src={logo2} className="App-logos decal2" alt="logo" />
              <img src={logo3} className="App-logos decal1" alt="logo" />
              <img src={logo4} className="App-logos decal2" alt="logo" />
              <img src={logo5} className="App-logos decal1" alt="logo" />
              <img src={logo6} className="App-logos decal2" alt="logo" />
              <img src={logo7} className="App-logos decal1" alt="logo" />
              <img src={logo8} className="App-logos decal2" alt="logo" />
            </Fade>
          </div>
      
          <div id='contactme'>
            <Contact />
          </div>
       </section >

      </div>

    </div>
  );
 }


export default App;
