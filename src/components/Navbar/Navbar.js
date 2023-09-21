import React from 'react'
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget.tsx';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact us</li>
        <li><CartWidget/></li>
      </ul>
    </nav>
  )
}

export default Navbar
