import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'
import {BsLinkedin, BsInstagram, BsTwitter} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';import Logo from '../../../assets/Logos/Logo.svg';
import { NavHashLink  } from 'react-router-hash-link';
// import { motion } from 'framer-motion';

const NavLogo = styled.div`
    width: 65px;
`

export default function Hamburger (){
    const [toggle, setToggle] = useState(false);

    // close the mobilemenu when a mobile link is clicked
    const CloseMenu = () => setToggle(false);

    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: -0};

  return(
    <div className="mobileDisplay">
        <div className="navHeader">
            <NavHashLink smooth to="/" className="mobileLogo"><NavLogo><img src={Logo} alt="Logo" /></NavLogo></NavHashLink>
            <div className={toggle ? "change" : "navToggle"} onClick = {()=> setToggle(!toggle)}>
                <div className="bar bOne" >{toggle}</div>
                <div className="bar bTwo"></div>
                <div className="bar bThree"></div>
            </div> 
        </div>

        {toggle  && <div className={toggle ? "mobileMenu" : "active"}>
                <ul 
                    className="navItems"
                    // initial={animateFrom}
                    // animate={animateTo}
                    // transition={{delay: 0.10}}
                >
                    <li className="navList" onClick={CloseMenu}>
                        <NavLink to="/" className="navLink">
                            <a href="/" className="mobileLogo"><NavLogo><img src={Logo} /></NavLogo></a>    
                        </NavLink>
                    </li>
                    <li className="navList" onClick={CloseMenu}><NavHashLink smooth to="/#what-we-do" className="navLink">What we do</NavHashLink></li>
                    <li className="navList" onClick={CloseMenu}><NavHashLink smooth to="/#what-we-use" className="navLink">What we use</NavHashLink></li>
                    <li className="navList" onClick={CloseMenu}><NavHashLink smooth to="/#who-we-are" className="navLink">Who we are</NavHashLink></li>
                    <li className="navList" onClick={CloseMenu}><NavHashLink smooth to="/#contact" className="navLink">Contact</NavHashLink></li>
                </ul>
                <div className="navFooter">
                    <div className="navSocialLinks">
                        <a href="/" className="SocialLink"><BsLinkedin /></a>
                        <a href="/" className="SocialLink"><BsInstagram /></a>
                        <a href="/" className="SocialLink"><BsTwitter /></a>
                    </div>
                    <div className="copyrightWhite">
                        <p>© 2022 cloudnimi, inc.</p>
                    </div>
                </div>
            </div>
        }

    </div>
  )
};

