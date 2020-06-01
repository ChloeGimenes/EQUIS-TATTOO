import React from 'react';
// import ScrollReveal from 'scrollreveal';
// import FadeIn from "react-fade-in";
import Fade from 'react-reveal/Fade';

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

// ScrollReveal().reveal('.App-fade', { delay: 2000 });

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <div className="App-header-socials">
            <a href="https://www.instagram.com/equis.skate/"><p className="social">Instagram</p></a>
            <a href="https://www.facebook.com/equis.skate"><p className="social">Facebook</p></a>
          </div>
          <div className="App-name">
            <p>TATTOO ARTIST<br/>BASED<br/>IN FRANCE</p>
          </div>

          
      </div>
      <div className="App-main">

          <div className="App-header-title">
            <p className="title">EQUIS TATTOO</p>
          </div>
       
          <img src={logo} className="App-logo" alt="logo" />
      </div>
          <div className="menu">
            <p className="menu1">&nbsp;&nbsp;&nbsp;ABOUT</p>
            <p className="menu2">&nbsp;WORKS</p>
            <p className="menu3">&nbsp;&nbsp;CONTACT</p>
          </div>
          {/* <FadeIn transitionDuration='2000'> */}
          <div className="App-fade">
            <p className="App-introduction">HI, I AM A FRENCH ARTIST PASSIONATE BY ART TATTOO,<br/> ILLUSTRATION, SKATEBOARDING AND ARCHITECTURE.<br/>I LOVE TO MIX THEM UP AND CROSSING NEW BOUNDARIES. I GIVE IMPORTANCE IN<br/>EXPLORING FEMALE GENDERS AND QUEER IDENTITIES<br/>AS A SOURCE OF INSPIRATION. THROUGH MY WORKS<br/>I LOVE TO HIGHLIGHT WOMEN FIGHT FOR EQUALITY. IN EVERY GENDERS<br/>AND NATIONALITIES. UNDERGROUND CULTURE AND TRIPS ALSO HAVE<br/>A GREAT INFLUENCE ON MY PRODUCTIONS<br/>I DO MANY EXHIBITIONS IN DIFFERENTS PLACES.<br/>I AM ALWAYS READY FOR NEW PROJECTS AND OTHER PERSPECTIVES.<br/>MAINLY BASED IN BORDEAUX, NANTES AND PARIS.  </p>
          </div>
          {/* </FadeIn> */}
        
          <div className="App-images">
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
      
     
        <Contact />

    </div>
  );
}

export default App;
