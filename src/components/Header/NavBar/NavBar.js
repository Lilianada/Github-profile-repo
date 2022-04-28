import '../../../App.css';
import Hamburger from '../Hamburger/Hamburger';
import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/Logos/Logo.svg';
import { NavHashLink  } from 'react-router-hash-link';

const NavLogo = styled.div`
    width: 65px;
`

export default function Header () {
    
    return(
        <header className="navigation">
            <Hamburger />

            <div className="desktopDisplay">
                <NavHashLink smooth to="/" className="mobileLogo"><NavLogo><img src={Logo} alt="Logo" /></NavLogo></NavHashLink>
                <ul className="navItems">
                    <li className="navList"><NavHashLink smooth to="/#what-we-do" className="navLink">What we do</NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#what-we-use" className="navLink">What we use</NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#who-we-are" className="navLink">Who we are</NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#contact" className="navLink">Contact</NavHashLink></li>
                </ul>
            </div>
        </header>
    )
};