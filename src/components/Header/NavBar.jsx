import Hamburger from './Hamburger';
import React from 'react';
import './NavBar.css';
import { BsGithub } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { Link  } from 'react-router-dom';

export default function Header () {
    return(
        <header className='navigation'>
            <Hamburger />
            
            <div className='desktopDisplay'>
                <div className='leftList'>
                    <ul className="navItems">
                        <li className="navList"> <Link smooth="true" to="/" className="mobileLogo"><BsGithub size={30} fill='#F0F6FC' /></Link></li>
                        <li className="navList">
                            <div className="navLink"> 
                                <div className='inputBox'>
                                    <input
                                        className='input'
                                        type="search" 
                                        name='search' 
                                        placeholder='Search or jump to...'
                                    />
                                    <div className='box'><p style={{fontSize: "10px", lineHeight: "13px"}}>/</p></div>
                                </div> 
                            </div></li>
                        <li className="navList"><a className="navLink" href="https://lilydesigned.vercel.app/" target="_blank" rel="noreferrer" >Portfolio</a></li>
                        <li className="navList"><Link smooth="true" to="/who-we-are" className="navLink">Error</Link></li>
                        <li className="navList"><Link smooth="true" to="/contact" className="navLink">404Page</Link></li>
                        <li className="navList"><Link smooth="true" to="/Login" className="navLink">Login</Link></li>
                    </ul>
                </div>
                <div className='rightList'>
                    <ul className="navItems">
                        <li className="navList"> <Link smooth="true" to="/" className="mobileLogo"><IoNotificationsOutline size={20} fill='#F0F6FC' /></Link></li>
                        <li className="navList"> <Link smooth="true" to="/" className="mobileLogo"><AiOutlinePlus size={20} fill='#F0F6FC' /></Link></li>
                        <li className="navList"> <Link smooth="true" to="/" className="mobileLogo"><div className='circle'></div></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
};