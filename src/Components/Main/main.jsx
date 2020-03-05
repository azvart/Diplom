import React from 'react';
import Home from './Home/home';
import Product from './Product/product';
import Faq from './Faq/Faq';
import Contacts from './Contacts/contacts';
import {Route} from 'react-router-dom';

const Main =(props) => {

    return(
        <div className='row'>
            <div className='col-lg-12'>
                <Route path='/home' render={ ()=><Home home={props.main} />} />
                <Route path ='/products' render ={()=> <Product />} />
                <Route path='/faq' render ={ ()=> <Faq /> } />
                <Route path='/contacts' render = {()=> <Contacts />} />
            </div>
        </div>
    )
}

export default Main;