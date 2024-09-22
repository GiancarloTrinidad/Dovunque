import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'bold',
            textDecoration: isActive ? 'none' : 'none'
        }
    }

    return(
        <nav>
            <NavLink style={{ textDecoration: 'none' }} to = '/login'>Login</NavLink>
            <NavLink style={{ textDecoration: 'none' }} to = '/payment'>Payment</NavLink>
            <NavLink style={{ textDecoration: 'none' }} to = '/register'>Register</NavLink>
            <NavLink style={{ textDecoration: 'none' }} to = '/reservation'>Reservation</NavLink>
        </nav>
    )
}

export default Navbar;