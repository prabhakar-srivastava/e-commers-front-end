import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='container-home'>
        <div className='about-company'>
           <div className='comp-name'>
                <h2>
                    <span>VidyutTech </span>Private Limited 
                </h2>
                <p>We are building an EV adoption ecosystem for India. We offer various products and services related to EVs starting from financing and lease. We have next-generation ML-based asset underwriting algorithms.</p>
                <Link  className='shop' to='/item'>Visit Our Shop</Link>
            </div> 

        </div>
        <div className='greet'>
            <div className='helo'>
                thaks for reaching me
            </div>
            {/* <img id='img1' src={Img} alt='not found'/>
            <img id='img2' src={Img2} alt=' not found'/> */}
        </div>
    
    
    </div>
  )
}

export default Home