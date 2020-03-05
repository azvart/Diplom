import React from 'react';
import Form from './form/form';
import Articles from './formarticles/article';
const Faq =() => {
    return(
        <div className='row'>
        <div className='col-lg-6'>
           <Form />
        </div>
        <div className='col-lg-6'>
            <Articles />
        </div>
        </div>
    )
}

export default Faq;