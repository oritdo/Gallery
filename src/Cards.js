import React from 'react';

function Cards(props) {

    return <div className="flex wrap">
          

           {props.cards.map((card) =>(
            <div className="card flex raw">
                                 
                                 <div>
                                     <img className="card-img" src={card.picture} alt="picture-image"/>
                                 </div>
                                 <div className= "card-details flex col">
                                     <div className="card-title link left"><a href="#" className=" text-decoration-none text-warning">{card.title}</a></div> 
                                     <div className="card-description left">{card.description}</div>
                                     <div className="card-date left">{card.date}</div>
                                     <div className="card-views left">Views:{card.views}</div>
                                     <button type="button" className="btn btn-light pl-3">Edit</button>
                                 </div>
                                 </div>
                            
           ))}
          
            </div>;
   
}

export default Cards;