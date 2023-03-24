import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../../components/common/Nav/Nav';
import './homePage.css';

export default function HomePage() {
   return (
      <div className='homePageContainer'>
         <Nav />
         <div className='homePage'>
            {/* <Link to='/products'><button className='btnStart'>START</button></Link> */}
         </div>
      </div>
   )
}
