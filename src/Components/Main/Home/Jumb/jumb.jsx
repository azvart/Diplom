import React from 'react';
import {Tween} from 'react-gsap';

import ArticleLeft from '../article/articleleft';
import ArticleRight from '../article/articleright';



const Jumb =() =>{
return(
  <div>
    <Tween from={{opacity:0,scale:0}} duration={0.9}>
  <div className="jumbotron jumbotron-fluid bg-dark text-white">
  <div className="container">
    <h1 className="display-4">Home</h1>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
    </Tween>
    <div className='row text-center'>
      
      <ArticleLeft />
     
    
    <ArticleRight />
    </div>
    </div>
)
}



export default Jumb;