import React from 'react'
import {Link} from 'react-router-dom'

const Footers = () => {
  return (

    <div className='container_footer'> 
        <div className='links'>
            <Link to='/'>HOME</Link>
            <Link to='/item'>ITEMS</Link>
            <Link to='/contact'>CONTACT US</Link>
        </div>
        <div className="footer_copyright">
          <small>&copy; PRABHAKAR , All rights reserved</small>
        </div>
    </div>
  )
}

export default Footers