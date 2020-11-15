import React from 'react';


function picturePage(props) {
 

   return <div className="flex wrap">
  
  {/* Main */}
  <main role="main">
  
   <div className="row-4"></div>
      {/* Picture */}
      <section id="Piture" className="mb-4" role="region">
      
  <div className="overlay">
    <div className="container-fluid pt-3">
     
        
        <div className="card bordr-primary col-11">
              <div className="card-body">
          <h2 className="display-4 text-center mb-n3 text-info">Picture Title Here</h2>
        <div>
          <div className="container mt-5">
            <div className="row">  
        <div className="col-md-5">
          <img
            src="./img/14.jpg"
            className="img-fluid d-none d-lg-block"
            alt="picture"
            title="picture"
          />
          <div className="pt-4 pb-2">
          <div className="d-inline h4 font-weight-bold"> Description: <p className="d-inline h4 font-weight-normal"> Acrylic on canvas</p></div>
          <div className="d-inline h4 font-weight-bold"> Category: <p className="d-inline h4 font-weight-normal"> Category Here</p></div>
          </div>
          </div> 
          </div>
          </div>
          </div>
            <div className="col-lg">
          <h2 className="d-inline h5 font-weight-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ornare leo eget purus viverra, non sagittis est ullamcorper.
            Vestibulum tincidunt est dui, quis semper lectus malesuada pulvinar.
            Morbi accumsan mollis nulla, ac aliquet leo. Aliquam erat volutpat.
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ornare leo eget purus viverra, non sagittis est ullamcorper.</p>
          </h2>
          <p className="mt-3">
          
            <a
              href="#"
              className="btn btn-outline-secondary btn-lg right font-weight-bold"
            >
              Back to  the Gallery
            </a> 
            
          </p>
          </div>
        </div>
          </div>
         
     
    </div>
  </div>
</section>;

</main>  
    
  

 
</div>;

}

export default picturePage;



      // <div className="container-fluide">
      //   <div className="row">
      //     <div className="col-md-3">
      //       <div className="mb-2 text-center">
      //         {/*Note: switch out the below icon to an image of the artist
      //                     <img src="" className="card-img" alt="A Image" title="Artist Name">*/}
      //         <i className="fas fa-user fa-10x" />
      //       </div>
      //     </div>
      //     <div className="col-md-9">
      //       <div className="card-body pt-0">
      //         <p className="card-text mx-auto ">
      //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      //           ornare leo eget purus viverra, non sagittis est ullamcorper.
      //           Vestibulum tincidunt est dui, quis semper lectus malesuada
      //           pulvinar. Morbi accumsan mollis nulla, ac aliquet leo. Aliquam
      //           erat volutpat.
      //         </p>
             