import React from 'react'
import Navbar from './navbar'
import Footers from './footers'
import {Outlet} from 'react-router-dom'
import './merge.css'

const Merge = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footers/>
    </>
  )
}

export default Merge