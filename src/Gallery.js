import React from 'react';


function Gallery(props) {
  

   return <div  className="flex wrap ">
 
  {/* Main */}
  <main role="main">
 
    {/* Gallery */}
    
    <section id="gallery" className="mb-4" role="region">
     
        <div className="container- fluide">
          <div className="row-1 mt-1 pl-1 mt-5">
                       
              <h2 className="display-4 pl-3 text-info">Gallery</h2>
              <div className="pl-3 font-weight-light text-info"><h4>Show Gallery</h4></div>              
               
                  <div className="col-md-4 ml-3 mt-2 pl-3">
                      <span>
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked=""/>
                        <label className="form-check-label" for="exampleRadios1">Most Popular</label>
                      </span>
                      <span className="ml-5">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked=""/>
                        <label className="form-check-label" for="exampleRadios1">New</label>
                      </span>
                  </div>
                            
          </div>
            <div>
              <div className="col-md-6 ml-1 pt-3 pl-3">
                <input className="form-control" type="text" placeholder="Search by subject"/>
              </div>
              <div className="col-md-6 ml-1 pt-2 pl-3">
                <input className="form-control" type="text" placeholder="Search by category"/>
              </div>
            </div>


              <div className="col-md-4 ml-3 mt-2 pt-2 pl-3">
                <span>
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked=""/>
                  <label className="form-check-label" for="exampleRadios1">All keywords</label>
                </span>
                <span className="ml-5">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked=""/>
                  <label className="form-check-label" for="exampleRadios1">At least one keyword</label></span>
              </div> 
            </div>
          <hr></hr>
     
      </section>

      {/* Follow Me */}
    <section id="follow me" className="jumbotron jumbotron-fluid mb-4 row-md-12" role="region">
      <div className="col-md-2"></div>
     
      <div className="container-fluide">
        <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card-body pt-0">
              <p className="card-text mx-auto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ornare leo eget purus viverra, non sagittis est ullamcorper.
                Vestibulum tincidunt est dui, quis semper lectus malesuada
                pulvinar. Morbi accumsan mollis nulla, ac aliquet leo. Aliquam
                erat volutpat.
              </p>
             
              <div className="social-icons">
                <h4 className="d-inline mr-2 font-weight-normal">Follow</h4>
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
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    
  </main>
  
    
    
</div>;

}

export default Gallery;