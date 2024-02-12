import React from "react";
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiVisualstudio, DiGit, DiGithubBadge } from "react-icons/di";
import { SiDaisyui, SiTailwindcss, SiWordpress, SiNotion, SiNextdotjs, SiPhp, SiMysql } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { TbBrandFramerMotion, TbTerminal } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { LuAccessibility } from "react-icons/lu";
import { Link } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import Feature from "../components/Feature";


export default function Hero() {

    return (
    <>
    <div className="hero">
        <ScrollToTop />

        <div className="hero--content">

            <div className="hero--top">
                <Feature />
                <div className="hero--text">
                    <h2>I'm <span className="text-outline">Michelle</span></h2>
                    <p style={ {fontSize: "1.5rem"}}>I'm a front-end developer in Melbourne, Australia.</p>
                    <p>I love design, coding, and learning to design and code cool stuff.</p>
                    <p>
                    <Link to="/about">Learn more about me</Link> or <Link to="/projects">see some things I've made</Link>.
                    </p>
                </div>
            </div>

            <div className="tools-container gradient-border">
                <h3>I use:</h3>

                <div className="tools-container-icons">
                    <span><DiHtml5 /> HTML5</span>
                    <span><DiCss3 /> CSS3</span>
                    <span><DiJsBadge /> JavaScript</span>
                    <span><DiReact /> React</span>
                    <span><SiTailwindcss /> TailwindCSS</span>
                    <span><SiDaisyui /> DaisyUI</span>
                    <span><DiGit /> Git</span>
                    <span><DiGithubBadge /> GitHub</span>
                    <span><DiVisualstudio /> VS Code</span>
                    <span><SiNotion /> Notion</span>
                </div>
                <br />
                <div className="tools-container-icons tools-secondary">
                    <span> <TbTerminal /> Unix</span>
                    <span><SiNextdotjs /> Next</span>
                    <span><FaFigma /> Figma</span>
                    <span><SiPhp /> PHP</span>
                    <span><SiMysql /> MySQL</span>
                    <span><SiWordpress /> WordPress</span>
                    <span><TbBrandFramerMotion /> Framer Motion</span>
                    <span><MdOutlineSecurity /> Web Security</span>
                    <span><LuAccessibility /> Accessibility</span>
                </div>
            
            </div>
            
        </div>

    </div>
</>
    )
}