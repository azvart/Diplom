import React from 'react';
import {Tween} from 'react-gsap';

const ArticleLeft = () => {
    return(
        <div className='col-lg-6'>
            <Tween from={{opacity:0,x:-100}}>
              <div className="jumbotron jumbotron-fluid bg-info text-white">
  <div className="container">
    <h1 className="display-4">Left</h1>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
</Tween>
        </div>
    )
}

export default ArticleLeft;