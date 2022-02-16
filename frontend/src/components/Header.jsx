import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-cions/fa'
import {Link} from "react-router-dom"

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <Link to="/">GoalSetter</Link>
        </div>
    </header>
  )
}

export default Header