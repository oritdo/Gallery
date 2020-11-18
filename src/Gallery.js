import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import data from './data';

function Gallery() {

  const [gallery, setGallery] = useState([]);

  useEffect(() =>{
    let exist = null;
    if(!localStorage.getItem('gallery')){
      exist = data;
      localStorage.setItem('gallery', JSON.stringify(data));
    }else{
      exist = JSON.parse(localStorage.getItem('gallery'));
    }
    setGallery(exist);
  }, []);  

  const updateViews = cardId => {
    const gallery = JSON.parse(localStorage.getItem('gallery'));
    gallery.forEach(picture => {
      if(picture.id == cardId){
        picture.views++;
        picture.date = new Date().toLocaleString('he-IL');
      }
    });
    localStorage.setItem('gallery', JSON.stringify(gallery));
  }

  const sortBy = by => {
    const cards = [...gallery];
    if(by === 'popular'){
      cards.sort((card1, card2) => card2.views - card1.views);
    }else if(by === 'newest'){
    
      cards.sort((card1, card2) => new Date(card2.date) - new Date(card1.date));
    }
    setGallery(cards);
  }

  return <div className="flex wrap ">
    <div className="pl-1 pt-4">
        <span onClick={() => sortBy('popular')}>
          <input  type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
          <label className="form-check-label ml-2" for="exampleRadios1">Most Popular</label>
        </span>
        <span onClick={() => sortBy('newest')} className="ml-5">
          <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
          <label className="form-check-label ml-2" for="exampleRadios1">New</label>
        </span>
    </div>
    <div className="row">
    {gallery.map((card) => (
      <div className="card flex raw">
        <div>
          <img className="card-img" src={card.picture} alt="picture-image" />
        </div>
        <div className="card-details flex col">
          <div className="card-title link left">
            <Link 
              onClick={() => updateViews(card.id)}
              to={`/picture/${card.id}`} className=" text-decoration-none text-warning">{card.title}</Link></div>
          <div className="card-description left">{card.description}</div>
          <div className="card-date left">{card.date}</div>
          <div className="card-views left">Views:{card.views}</div>
          <Link
            onClick={() => updateViews(card.id)}
            to={`/picture/${card.id}`}
            className="btn btn-light pl-3"
          >
            Full Details
            </Link>
        </div>
      </div>
    ))}
    </div>



    {/* Main */}
    <main role="main">

      {/* Gallery */}

      <section id="gallery" className="mb-4" role="region">
{/* 
        <div className="container- fluide">
          <div className="row-1 mt-1 pl-1 mt-5">

            <h2 className="display-4 pl-3 text-info">Gallery</h2>
            <div className="pl-3 font-weight-light text-info"><h4>Show Gallery</h4></div>

            <div className="col-md-4 ml-3 mt-2 pl-3">
              <span>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                <label className="form-check-label" for="exampleRadios1">Most Popular</label>
              </span>
              <span className="ml-5">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
                <label className="form-check-label" for="exampleRadios1">New</label>
              </span>
            </div>

          </div>
          <div>
            <div className="col-md-6 ml-1 pt-3 pl-3">
              <input className="form-control" type="text" placeholder="Search by subject" />
            </div>
            <div className="col-md-6 ml-1 pt-2 pl-3">
              <input className="form-control" type="text" placeholder="Search by category" />
            </div>
          </div>


          <div className="col-md-4 ml-3 mt-2 pt-2 pl-3">
            <span>
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
              <label className="form-check-label" for="exampleRadios1">All keywords</label>
            </span>
            <span className="ml-5">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
              <label className="form-check-label" for="exampleRadios1">At least one keyword</label></span>
          </div>
        </div> */}
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