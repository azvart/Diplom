import React from 'react';
import {Tween} from 'react-gsap';


const Articles = () => {
    return(
        <div>
        <Tween from={{opacity:0, x:100}} duration={1}>
        <div class="jumbotron bg-secondary text-white">
        <h1 class="display-4">FAQ</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </div>
      </Tween>
      </div>
    )
}



export default Articles;