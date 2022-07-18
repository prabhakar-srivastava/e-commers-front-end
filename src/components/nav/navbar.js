import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='container-nav'>
        <div className='logo'>
            Vidyut  <span>Tech</span>
        </div>
        <div className='navigate'>
            <ul>
                <li>
                    <NavLink className='active' to='/'>HOME</NavLink >
                </li>
                <li>
                    <NavLink  className='active' to='/item'>ITEMS</NavLink >
                </li>
                <li>
                    <NavLink className='active' to='/contact'>CONTACT US</NavLink >
                </li>
            </ul>
            <h4> Log-in</h4>
        </div>
    
    </div>
  )
}

export default Navbar