import Hamburger from '../Hamburger/Hamburger';
import React from 'react';
import styled from 'styled-components';
import { BsGithub } from "react-icons/bs";
import { NavHashLink  } from 'react-router-hash-link';

    const Navigation = styled.header`
        background: var(--headerBg-color);
        color: var(--headTxt-color);
    `
    const DesktopDisplay = styled.div`
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        z-index: 1;
        padding: 2rem 2rem;
        width: 100%;
    `
    

export default function Header () {
    return(
        <Navigation>
            <Hamburger />
            
            <DesktopDisplay>
                <p>Hello</p>
                <ul className="navItems">
                    <li className="navList"> <NavHashLink smooth to="/" className="mobileLogo"><BsGithub size={48} fill='#F0F6FC' /></NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#what-we-do" className="navLink">What we do</NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#what-we-use" className="navLink">What we use</NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#who-we-are" className="navLink">Who we are</NavHashLink></li>
                    <li className="navList"><NavHashLink smooth to="/#contact" className="navLink">Contact</NavHashLink></li>
                </ul>
            </DesktopDisplay>
        </Navigation>
    )
};