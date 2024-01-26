import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {

    return (
        <footer>
            <ul>
                <li className="social-icon"><a href="https://github.com/mchlol" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a></li>
                <li className="social-icon"><a href="https://www.linkedin.com/in/michellebrown01/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a></li>
            </ul>
        </footer>
    )
}