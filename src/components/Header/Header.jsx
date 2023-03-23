import './Header.scss';

import {NavLink} from "react-router-dom";

import Logo from '../../assets/Logo/InStock-Logo_2x.png';

function Header () {
    return (
        <header className='header'>
            <NavLink to='/'>
            <img className='header__logo' src={Logo} alt="Instock Logo"/>
            </NavLink>
            <nav className='nav'>
                <div className='nav__links'>
                    <NavLink to='/' className='nav__link nav__link--active'>
                        <p>Warehouses</p>
                    </NavLink>
                    <NavLink to='/' className='nav__link'>
                        <p>Inventory</p>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
