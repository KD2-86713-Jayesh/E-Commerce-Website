import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

export const Header = () => {
  return (
    <header>
        {/*TOP BAR */}
        <Topbar></Topbar>
        {/* NAV BAR */}
        <Navbar></Navbar>
        {/*CART DRAWER */}
    </header>
  )
}
