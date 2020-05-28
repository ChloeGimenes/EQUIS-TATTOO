import React from 'react';
import Contact from './Contact'
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

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <div className="App-header-socials">
            <p className="social">Instagram</p>
            <p className="social">Facebook</p>
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
            <p className="menu1">ABOUT</p>
            <p className="menu2">WORKS</p>
            <p className="menu3">CONTACT</p>
          </div>

          <div>
            <p></p>
          </div>

          <div className="App-images">
          <img src={logo1} className="App-logos decal1" alt="logo" />
          <img src={logo2} className="App-logos decal2" alt="logo" />
          <img src={logo3} className="App-logos decal1" alt="logo" />
          <img src={logo4} className="App-logos decal2" alt="logo" />
          <img src={logo5} className="App-logos decal1" alt="logo" />
          <img src={logo6} className="App-logos decal2" alt="logo" />
          <img src={logo7} className="App-logos decal1" alt="logo" />
          <img src={logo8} className="App-logos decal2" alt="logo" />
          </div>
     
        <Contact />

    </div>
  );
}

export default App;
