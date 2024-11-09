import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <header style={{backgroundColor:'lightgray'}}>
        <nav>
            <ul style={{display:'flex',justifyContent:"space-around",listStyle:"none",padding:'10px','margin':'5px'}}>
                <li>
                    <Link to="/"
                          className='nav_link'
                          >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/services">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

export default Navbar