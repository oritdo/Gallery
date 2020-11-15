import React from 'react';


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
        <a href="#gallery" className="navbar-brand" title="Book Title">
          Orit's Art Gallery
        </a>
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
            <a href="#gallery" className="nav-link" title="Gallery">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="#about me" className="nav-link" title="About me">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#sign in" className="nav-link" title="sign in">
              Sign In
            </a>
          </li>
          <li className="nav-item">
            <a href="#sign up" className="nav-link" title="sign up">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</>;
  


}

export default navBar;