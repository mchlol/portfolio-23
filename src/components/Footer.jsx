import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion';

export default function Footer() {

    return (
        <footer>
            <ul>
                <motion.li 
                whileHover={{ scale: 1.1 }}
                className="social-icon"><a href="https://github.com/mchlol" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a></motion.li>

                <motion.li 
                whileHover={{ scale: 1.1 }}
                className="social-icon"><a href="https://www.linkedin.com/in/michellebrown01/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a></motion.li>
            </ul>
        </footer>
    )
}