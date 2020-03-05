import React from 'react';
import {BrowserRouter} from 'react-router-dom';


import Header from './Components/Header/header';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';


const App = (props) => {
  
  return(
    <div className='container-fluid'>
      <BrowserRouter>
        <Header header={props.header} />
        <Main main = {props.main} />
        
        </BrowserRouter>
        <Footer />
    </div>
  )
}

export default App;
