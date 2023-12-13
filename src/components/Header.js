import React from 'react';
import logo from '../../assests/img/logo.png'

const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;