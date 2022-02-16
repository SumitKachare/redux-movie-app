import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

import userLogo from "../../images/user.png"

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <div className='logo'>Movie App</div>
      </Link>
      <div className='user-img'>
        <img src={userLogo}  alt="user" />
      </div>
    </div>
  )
}

export default Header