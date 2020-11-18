import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Gallery from './Gallery';
import PicturePage from './PicturePage';
import About from './About';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Footer from './Footer';
import NavBar from './NavBar';
import 'font-awesome/css/font-awesome.min.css';


function App() {

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <NavBar />
        <div className="main flex-wrap">
          <Switch>
            <Route path="/" exact={true}>
              <Gallery />
            </Route>
            <Route path="/about-me">
              <About />
            </Route>
            <Route path="/picture/:id">
              <PicturePage />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>

          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
