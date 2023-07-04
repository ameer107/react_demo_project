import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <h2>ReactDemo.</h2>
        <main>
          <Link to={"/"}>Home</Link>
          <Link to={"/#about"}>About</Link>
          <Link to={"/#contact"}>Contact</Link>
          <Link to={"/#brands"}>Brands</Link>
          <Link to={"/#services"}>Servcies</Link>
        </main>
      </nav>
    </>
  )
}

export default Header