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
                 
            </FooterSection>
        )
}

<ul class="list-style-none d-flex flex-justify-center">
        <li class="mr-3"><a href="/site/terms" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}">Terms</a></li>
        <li class="mr-3"><a href="/site/privacy" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}">Privacy</a></li>
        <li class="mr-3"><a href="https://docs.github.com/articles/github-security/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}">Security</a></li>
          <li><a class="Link--secondary" data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
    </ul>