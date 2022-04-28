import React from 'react';
import './FooterStyles.js';
import {BsLinkedin, BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'
import { Copyright,
    FooterBottom,
    FooterLinks,
    FooterSection, 
    FooterSocial, 
} from './FooterStyles.js';

export default function Footer () {
        return(
            <FooterSection>
                <FooterBottom>
                    <FooterLinks>
                        <FooterSocial href="#" ><BsLinkedin/></FooterSocial>
                        <FooterSocial href="#" ><BsInstagram/></FooterSocial>
                        <FooterSocial href="#" ><BsTwitter/></FooterSocial>
                    </FooterLinks>
                    <Copyright><p>© 2022 <strong>cloudnimi</strong> by <a href="#">Designsbylilian</a>. All rights reserved.</p></Copyright>
                </FooterBottom>
            </FooterSection>
        )
}

