import Hamburger from '../Hamburger/Hamburger';
import React from 'react';
import styled from 'styled-components';
import { BsGithub } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink  } from 'react-router-dom';

    const Navigation = styled.header`
        background: var(--headerBg-color);
        color: var(--headTxt-color);
    `
    const DesktopDisplay = styled.div`
        display: none;

        @media screen and (min-width: 900px) {
            background:  var(--headerBg-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            z-index: 1;
            padding: 1rem 2rem;
            width: 100%;
        }
       
    `

    const InputBox = styled.div`
        display: flex;
        width: 270px;
        background: var(--bodyBg-color);
        border: 1px solid var(--bodyTxt-color);
        border-radius: 6px;
        transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
        transition-property: color,background-color,box-shadow,border-color;

        &:hover, :focus{
            width: 500px;
            color: var(--headerBg-color);
        }

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

        &:hover, :focus{
            width: 100%;
        }

        &::placeholder{
            color: var(--bodyTxt-color);
            font-size: var(--font-fourteen);
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
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        border: 1px solid var(--headerTxt-color);
    `
export default function Header () {
    return(
        <Navigation>
            <Hamburger />
            
            <DesktopDisplay>
                <LeftList>
                    <ul className="navItems">
                        <li className="navList"> <NavLink smooth to="/" className="mobileLogo"><BsGithub size={30} fill='#F0F6FC' /></NavLink></li>
                        <li className="navList">
                            <div className="navLink"> 
                                <InputBox>
                                    <Input
                                        type="search" 
                                        name='search' 
                                        placeholder='Search or jump to...'
                                    />
                                    <Box><p style={{fontSize: "10px", lineHeight: "13px"}}>/</p></Box>
                                </InputBox> 
                            </div></li>
                        <li className="navList"><NavLink smooth to="/what-we-use" className="navLink">Pulls</NavLink></li>
                        <li className="navList"><NavLink smooth to="/who-we-are" className="navLink">Issues</NavLink></li>
                        <li className="navList"><NavLink smooth to="/contact" className="navLink">Marketplace</NavLink></li>
                        <li className="navList"><NavLink smooth to="/contact" className="navLink">Explore</NavLink></li>
                    </ul>
                </LeftList>
                <RightList>
                    <ul className="navItems">
                        <li className="navList"> <NavLink smooth to="/" className="mobileLogo"><IoNotificationsOutline size={20} fill='#F0F6FC' /></NavLink></li>
                        <li className="navList"> <NavLink smooth to="/" className="mobileLogo"><AiOutlinePlus size={20} fill='#F0F6FC' /></NavLink></li>
                        <li className="navList"> <NavLink smooth to="/" className="mobileLogo"><Circle></Circle></NavLink></li>
                    </ul>
                </RightList>
            </DesktopDisplay>
        </Navigation>
    )
};