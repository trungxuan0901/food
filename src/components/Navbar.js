import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Global/CartContext';
import logo from '../img/logo1.png';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import '../App.css';
//rafce
const Navbar = () => {
    // --------toggle menu---------
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)
    //-----------------------------

    // -----------firebase------------
    const [{ loggedinuser }] = useStateValue()
    const logoutUser = () => {
        if (loggedinuser) {
            auth.signOut()
        }
    }//-------------------------------

    const { qty } = useContext(CartContext)
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div class="logo">
                        <img src={logo} className="logo" />
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/detailsProduct" className='nav-links' onClick={closeMenu}>
                                Menu
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMenu}
                            >
                                Services
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contact'
                                className='nav-links'
                                onClick={closeMenu}
                            >
                                Contact
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-links-sign">
                                <div onClick={logoutUser} className="nav-links btn--outline">
                                    <span className="header__optionLineOne">{loggedinuser?.email} </span>
                                    <span className="header__optionLineTwo">{loggedinuser ? 'Signout' : 'Sign In'}</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="right mr-4">
                    <li><Link to="cart">
                        <span className="shoppingCart text-warning">
                            <i className="fas fa-cart-plus text-warning mr-2"></i>
                            <span>{qty}</span>
                        </span>
                    </Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;
