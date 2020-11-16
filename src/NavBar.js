import React from 'react';
import {Link} from 'react-router-dom';


function navBar(props) {
    

  return <>
  {/* NavBar */}
  <nav
    id="main-nav"
    className="navbar navbar-expand-md navbar-dark bg-dark sticky-top"
    role="navigation"
    aria-label="primary"
  >
    <div className="container">
      <h1 className="d-inline align-middle">
        <Link to="/" className="navbar-brand" title="gallery">
          Orit's Art Gallery
        </Link>
      </h1>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div id="navbarCollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" title="Gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about me" className="nav-link" title="About me">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign in" className="nav-link" title="sign in">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign up" className="nav-link" title="sign up">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</>;
  


}

export default navBar;