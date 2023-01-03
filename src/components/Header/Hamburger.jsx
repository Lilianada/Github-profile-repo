import React from 'react';
import './NavBar.css';
import { useState } from 'react'
import {BsLinkedin, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs';
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';


export default function Hamburger (){
    const [toggle, setToggle] = useState(false);

    // close the mobilemenu when a mobile link is clicked
    const CloseMenu = () => setToggle(false);

  return(
    <div className="mobileDisplay">
        <div className="navHeader">
            <NavLink smooth="true" to="/" className="mobileLogo">
                <div className='navLogo'>
                    <BsGithub size={48} fill='#F0F6FC' />
                </div>
            </NavLink>
            <div className={toggle ? "change" : "navToggle"} onClick = {()=> setToggle(!toggle)}>
                <div className="bar bOne" >{toggle}</div>
                <div className="bar bTwo"></div>
                <div className="bar bThree"></div>
            </div> 
        </div>

        {toggle  && <div className={toggle ? "mobileMenu" : "active"}>
                <ul className="navItems">
                    <li className="navList"> 
                        <NavLink smooth="true" to="/" className="mobileLogo">
                            <BsGithub size={24} fill='#F0F6FC' />
                        </NavLink>
                    </li>
                    <li className="navList" onClick={CloseMenu}>
                        <div className="navLink"> 
                            <div className='inputBox'>
                                <input 
                                    className='input'
                                    type="search" 
                                    name='search' 
                                    placeholder='Search or jump to...'
                                />
                                <div className='box'>
                                    <p style={{fontSize: "10px", lineHeight: "13px"}}>/</p>
                                </div>
                            </div> 
                        </div>
                        </li>
                    <li className="navList" onClick={CloseMenu}> <a className="navLink" href="https://lilydesigned.vercel.app/" target="_blank" rel="noreferrer" >Portfolio</a> </li>
                    <li className="navList" onClick={CloseMenu}> <NavLink smooth="true" to="/error" className="navLink">Error</NavLink></li>
                    <li className="navList" onClick={CloseMenu}> <NavLink smooth="true" to="/404page" className="navLink">404Page</NavLink></li>
                    <li className="navList" onClick={CloseMenu}> <NavLink smooth="true" to="/login" className="navLink">Login</NavLink></li>
                    <li className="navList" onClick={CloseMenu}> <NavLink smooth="true" to="/" className="mobileLogo"><IoNotificationsOutline size={20} fill='#F0F6FC' /></NavLink></li>
                    <li className="navList" onClick={CloseMenu}> <NavLink smooth="true" to="/" className="mobileLogo"><AiOutlinePlus size={20} fill='#F0F6FC' /></NavLink></li>
                    <li className="navList" onClick={CloseMenu}> <NavLink smooth="true" to="/" className="mobileLogo"><div className='circle'></div></NavLink></li>
                </ul>
                <div className="navFooter">
                    <div className="navSocialLinks">
                        <a href="/" className="SocialLink"><BsLinkedin /></a>
                        <a href="/" className="SocialLink"><BsInstagram /></a>
                        <a href="/" className="SocialLink"><BsTwitter /></a>
                    </div>
                    <div className="copyrightWhite">
                        <p>© 2023 Lilydesigned, inc.</p>
                    </div>
                </div>
            </div>
        }

    </div>
  )
};