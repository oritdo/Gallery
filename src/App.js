import React, { useState } from 'react';
import './App.css';

import Gallery from './Gallery';
import PicturePage from './PicturePage';
import About from './About';
import SignUp from './SignUp';
import SignIn from './SignIn';

import Footer from './Footer';
import NavBar from './NavBar';
import data from './data';
import 'font-awesome/css/font-awesome.min.css';

function App() {

 

  const cardsArr = data;


  return (
    <div className="container-fluid">    
      <NavBar/>
      <div className="main flex-wrap">
      
      <Gallery cards={cardsArr}/>  
      {/* <About/> */}
      {/* <PicturePage/>  */}

      {/* <SignUp/> */}
      {/* <SignIn/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
