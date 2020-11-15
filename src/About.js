import React from 'react';


function about(props) {
    

  return <div className="flex wrap bg-img">
  
  {/* Main */}
  <main role="main">
  
   <div className="container-fluide">
     
      {/* About Me */}
    <section id="about me" className="col md-8 row-md-12" role="region">
      <div className="container-fluide">
        
      <div className="row">
          <div className="col-md-6">
      <h2 className="display-4 text-center text-dark pr-5 pt-5 pb-3 font-weight-light">About Me</h2>
    </div>
    </div>
        <div className="row">
          <div className="col-md-1">
            <div className="mb-2 text-left">
           
              {/*Note: switch out the below icon to an image of the artist
                          <img src="" className="card-img" alt="A Image" title="Artist Name">*/}
              {/* <i className="char-icon fa fa-user fa-2x display-1 pl-5" /> */}
            </div>
          </div>
          <div className="col-md-10">
            <div className="card-body pt-0">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ornare leo eget purus viverra, non sagittis est ullamcorper.
                Vestibulum tincidunt est dui, quis semper lectus malesuada
                pulvinar. Morbi accumsan mollis nulla, ac aliquet leo. Aliquam
                erat volutpat.
              </p>
              <p className="card-text">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla id enim posuere, gravida leo vel,
                dictum arcu. Nulla convallis lobortis massa, eu sodales urna
                interdum eget.
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="card-text">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla id enim posuere, gravida leo vel,
                dictum arcu. Nulla convallis lobortis massa, eu sodales urna
                interdum eget.
              </p>
               <p className="card-text">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="card-text">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla id enim posuere, gravida leo vel,
                dictum arcu. Nulla convallis lobortis massa, eu sodales urna
                interdum eget.
              </p>
              <div className="social-icons">
                <h3 className="d-inline mr-2 pt-4 text-info">Follow</h3>
                <a href="#" title="Facebook">
                  <i className="fa fa-facebook-f fa-2x" />
                </a>
                <a href="#" title="Instagram">
                  <i className="fa fa-instagram fa-2x" />
                </a>
                {/* <a href="#" title="LinkedIn">
                  <i className="fa fa-linkedin-in fa-2x" />
                </a> */}
                <a href="#" title="Twitter">
                  <i className="fa fa-twitter fa-2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</main>


    
    
</div>;
  


}

export default about;