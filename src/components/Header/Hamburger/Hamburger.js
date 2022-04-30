import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'
import {BsLinkedin, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs';
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';

const NavLogo = styled.div`
    
`

const InputBox = styled.div`
    display: flex;
    width: 270px;
    background: var(--bodyBg-color);
    border: 1px solid var(--bodyTxt-color);
    border-radius: 6px;
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color;
`

const Input = styled.input`
    background:transparent;
    width: 100%;
    padding: 5px 12px;
    color: #F0F6FC;
    font-size: var(--font-twelve);
    font-weight: 300;
    letter-spacing: normal;
    border: none;
    outline: none;

    & :hover, :focus{
        background: var(--headerBg-color);
        border: 1px solid var(--headTxt-color);
    }

    &::placeholder{
        color: var(--bodyTxt-color);
    }
`

const Box = styled.div`
    width: .75rem;
    height: 1rem;
    border: 1px solid var(--headTxt-color);
    border-radius: 3px;
    margin: .25rem;
    text-align: center;
    line-height: 0%;

`
const LeftList = styled.div`
    
`
const RightList = styled.div`
    
`
const Circle = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 1px solid var(--headerTxt-color);
`

export default function Hamburger (){
    const [toggle, setToggle] = useState(false);

    // close the mobilemenu when a mobile link is clicked
    const CloseMenu = () => setToggle(false);

  return(
    <div className="mobileDisplay">
        <div className="navHeader">
            <NavLink smooth to="/" className="mobileLogo"><NavLogo><BsGithub size={48} fill='#F0F6FC' /></NavLogo></NavLink>
            <div className={toggle ? "change" : "navToggle"} onClick = {()=> setToggle(!toggle)}>
                <div className="bar bOne" >{toggle}</div>
                <div className="bar bTwo"></div>
                <div className="bar bThree"></div>
            </div> 
        </div>

        {toggle  && <div className={toggle ? "mobileMenu" : "active"}>
                <ul className="navItems">
                    <li className="navList"> <NavLink smooth to="/" className="mobileLogo"><BsGithub size={24} fill='#F0F6FC' /></NavLink></li>
                        <li className="navList" onClick={CloseMenu}>
                            <NavLink smooth to="search" className="navLink"> 
                                <InputBox>
                                    <Input
                                        type="search" 
                                        name='search' 
                                        placeholder='Search or jump to...'
                                    />
                                    <Box><p style={{fontSize: "10px", lineHeight: "none"}}>/</p></Box>
                                </InputBox> 
                            </NavLink></li>
                        <li className="navList" onClick={CloseMenu}> <NavLink smooth to="/pulls" className="navLink">Pulls</NavLink></li>
                        <li className="navList" onClick={CloseMenu}> <NavLink smooth to="/issues" className="navLink">Issues</NavLink></li>
                        <li className="navList" onClick={CloseMenu}> <NavLink smooth to="/marketplace" className="navLink">Marketplace</NavLink></li>
                        <li className="navList" onClick={CloseMenu}> <NavLink smooth to="/explore" className="navLink">Explore</NavLink></li>
                        <li className="navList" onClick={CloseMenu}> <NavLink smooth to="/notification" className="mobileLogo"><IoNotificationsOutline size={20} fill='#F0F6FC' /></NavLink></li>
                        <li className="navList" onClick={CloseMenu}> <NavLink smooth to="/add" className="mobileLogo"><AiOutlinePlus size={20} fill='#F0F6FC' /></NavLink></li>
                        <li className="navList" onClick={CloseMenu}> <NavLink smooth to="/profile" className="mobileLogo"><Circle></Circle></NavLink></li>
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
