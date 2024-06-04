import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navabar.css';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <Link to='/'>


    <div>
        <div className='navbar'>
            <FaCoins className='icon' />
            <h1>Coins <span className='purple'>Search</span></h1>
        </div>
    </div>
    </Link>
  )
}
