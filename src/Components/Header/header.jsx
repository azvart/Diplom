import React from 'react';
import {Link} from 'react-router-dom';

const Header =(props) => {

let navs = props.header.Navigation.map( n => <li className='nav-item'><Link to={n} className='nav-link'>{n}</Link></li>);


    return(
        <div className='row text-center py-3'>
            <div className='col-lg-4'>
                 {props.header.Logo}
            </div>
            <div className='col-lg-4'>
                <ul className='nav justify-content-center'>
                    {navs}
                </ul>
            </div>
            <div className='col-lg-4'>
                {props.header.Phone}    
            </div>
        </div>
    )
}



export default Header;