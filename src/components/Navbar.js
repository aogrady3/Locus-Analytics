import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
    <div className='navbar'>
        <div className='title'>
            <h1>Cat Adoption Site!</h1>
        </div>
        <div className='links'>
            <Link to='/'>
                <h1>Home</h1>
                </Link> 
            <Link to='/analytics'>
                <h1>Analytics</h1>
                </Link>
        </div>
    </div>
    )
}

export default Navbar