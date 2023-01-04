import React from "react";
import { BsGithub } from "react-icons/bs";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footerSection">
        <div className="logoContainer">
            <BsGithub size={48} fill='#a9abac' />
            <p className="smallTxt">© 2023 GitHub, Inc.</p>
        </div>
      <ul className="footerList">
        <li className="footerItem">
          <a
            href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
            data-analytics-event='{"category":"Footer","action":"go to terms","label":"text:terms"}'
          >
            Terms
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
            data-analytics-event='{"category":"Footer","action":"go to privacy","label":"text:privacy"}'
          >
            Privacy
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://docs.github.com/articles/github-security/"
            data-analytics-event='{"category":"Footer","action":"go to security","label":"text:security"}'
          >
            Security
          </a>
        </li> 
        <li className="footerItem">
          <a
            href="https://githubstatus.com/"
            data-analytics-event='{"category":"Footer","action":"go to status","label":"text:status"}'
          >
            Status
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://docs.github.com/"
            data-analytics-event='{"category":"Footer","action":"go to help","label":"text:help"}'
          >
            Docs
          </a>
        </li>
        <li className="footerItem">
          <a
            class="Link--secondary"
            data-ga-click="Footer, go to contact, text:contact"
            href="https://support.github.com/?tags=dotcom-footer"
          >
            Contact GitHub
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://github.com/pricing"
            data-analytics-event='{"category":"Footer","action":"go to pricing","label":"text:pricing"}'
          >
            Pricing
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://docs.github.com/"
            data-analytics-event='{"category":"Footer","action":"go to api","label":"text:api"}'
          >
            API
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://services.github.com/"
            data-analytics-event='{"category":"Footer","action":"go to training","label":"text:training"}'
          >
            Training
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://github.blog/"
            data-analytics-event='{"category":"Footer","action":"go to blog","label":"text:blog"}'
          >
            Blog
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://about.github.com/"
            data-analytics-event='{"category":"Footer","action":"go to about","label":"text:about"}'
          >
            About
          </a>
        </li>
      </ul>
    </footer>
  );
}