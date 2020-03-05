import React from 'react';
import {Tween} from 'react-gsap';



const Card = () =>{

    return(
        <Tween from={{opacity:0, y: 100}}>
        <div className='col-lg-12 my-3 stag'>
        <div className="card text-white bg-info mb-3">
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Info card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</Tween>
    )
}



export default Card;