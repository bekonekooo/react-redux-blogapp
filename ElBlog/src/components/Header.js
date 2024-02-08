import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>BLOG APP 2</h1>
      <NavLink to="/" activeclassname="active">Home</NavLink>
      <NavLink to="/blogs" activeclassname="active">Blogs</NavLink>
      <NavLink to="/contact" activeclassname="active">Contact</NavLink>
      <NavLink to="/create" activeclassname="active">Create Blog</NavLink>

    </header>
  )
}

export default Header
