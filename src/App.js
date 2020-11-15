import React, { useState } from 'react';
import './App.css';
import Cards from './Cards';
import Gallery from './Gallery';
import PicturePage from './PicturePage';
import About from './About';
import SignUp from './SignUp';
import SignIn from './SignIn';

import Footer from './Footer';
import NavBar from './NavBar';
//import data from './data';
import 'font-awesome/css/font-awesome.min.css';

function App() {
 
  //const [cards] = useState(data);

  const cardsArr = [
    { id: 1, picture: "./img/1.jpg", title: "Japanese inspiration", description: "Acrylic on canvas", date:"1.9.2010", views:14 },
    { id: 2, picture: "./img/2.jpg", title: "Plitvice lake 1", description: "Acrylic on canvas", date:"1.5.2020", views:10 },
    { id: 3, picture: "./img/3.jpg", title: "Plitvice lake 2", description: "Acrylic on canvas", date:"1.9.2016", views:5 },
    { id: 4, picture: "./img/4.jpg", title: "Near the lake", description: "Acrylic on canvas", date:"1.9.2013", views:3 },
    { id: 5, picture: "./img/5.jpg", title: "Roses in white", description: "Acrylic on canvas", date:"1.9.2020", views:5 },
    { id: 6, picture: "./img/6.jpg", title: "Fantasy", description: "Acrylic on canvas", date:"1.6.2017", views:12 },
    { id: 7, picture: "./img/7.jpg", title: "Flowers in red", description: "Acrylic on canvas", date:"1.9.2010", views:5 },
    { id: 8, picture: "./img/8.jpg", title: "Anemone field", description: "Acrylic on canvas", date:"1.7.2010", views:11 },
    { id: 9, picture: "./img/9.jpg", title: "Colorfulness", description: "Acrylic on canvas",  date:"1.8.2019", views:12 },
    { id: 10, picture: "./img/10.jpg", title: "Autumn", description: "Acrylic on canvas", date:"1.8.2015", views:4 },
    { id: 11, picture: "./img/11.jpg", title: "Still life", description: "Acrylic on canvas", date:"1.2.2019", views:5 },
    { id: 12, picture: "./img/12.jpg", title: "Dancer", description: "Acrylic on canvas", date:"1.5.2019", views:14, },
    { id: 13, picture: "./img/13.jpg", title: "Sky's the limit", description: "Acrylic on canvas", date:"1.3.2017", views:9 },
    { id: 14, picture: "./img/14.jpg", title: "Chrysanthemum field", description: "Acrylic on canvas", date:"1.5.2018", views:7 },
    { id: 15, picture: "./img/15.jpg", title: "Trees", description: "Acrylic on canvas", date:"1.3.2015", views:2 },
    { id: 16, picture: "./img/16.jpg", title:"Village", description: "Acrylic on canvas", date:"1.9.2014", views:10 },
    { id: 17, picture: "./img/17.jpg", title: "Children", description: "Acrylic on canvas", date:"1.6.2014", views:12 },
    { id: 18, picture: "./img/18.jpg", title: "Blooming entrance", description: "Acrylic on canvas", date:"1.9.2014", views:10 },
    { id: 19, picture: "./img/19.jpg", title: "Flowers", description: "Acrylic on canvas", date:"1.9.2011", views:4 },
    { id: 20, picture: "./img/20.jpg", title: "Dreamy mood", description: "Acrylic on canvas", date:"1.8.2010", views:15 },
  ];



  return (
    <div className="container-fluid">    
      <NavBar/>
      <div className="main flex-wrap">
      {/* <Cards cards={cardsArr}/>
      <Gallery/>   */} 
      <About/>
      {/* <PicturePage/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
