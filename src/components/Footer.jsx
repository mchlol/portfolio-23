import React from 'react';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import XtwitterLogo from '../assets/Xtwitter.png';

export default function Footer() {

    return (
        <footer>
            <ul>
                <li><a href="https://github.com/mchlol" target="_blank"><img className="social-icon" src={githubLogo} alt="github logo" /></a></li>
                <li><a href="https://www.linkedin.com/in/michellebrown01/" target="_blank"><img className="social-icon" src={linkedinLogo} alt="linkedin logo" /></a></li>
                <li><a href="https://twitter.com/mchlol" target="_blank"><img className="social-icon" src={XtwitterLogo} alt="X logo" /></a></li>
            </ul>
        </footer>
    )
}