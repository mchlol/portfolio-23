import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Nav() {

    return (
        <nav>
            <div>
                <h2 className="logo">mb</h2>
            </div>
            <ul>
                <li className="social-icon"><a href="https://github.com/mchlol" target="_blank">
                    <FaGithub />
                </a></li>
                <li className="social-icon"><a href="https://www.linkedin.com/in/michellebrown01/" target="_blank">
                    <FaLinkedin />
                </a></li>
            </ul>
        </nav>
    )
}