import React from "react";
import gamelistGif from '../assets/project-gamelist.gif';
import tenziesGif from '../assets/project-tenzies.gif';
import passwordGif from '../assets/project-password-generator.gif';
import quizzicalGif from '../assets/project-quizzical.gif'
import colorsGif from '../assets/project-colors.gif'
import { MdCode, MdVisibility } from "react-icons/md";
import ScrollToTop from '../components/ScrollToTop';
import { HiSparkles } from "react-icons/hi2";
import ProjectCard from "../components/ProjectCard";


export default function Projects() {
    return (
        <main className="projects-section">
            <ScrollToTop />
            <h2 className="section-header">Projects</h2>

            <div className="project-wrapper">

                <div className="project-img-container gradient-border">

                    <h3 className="main-project-header">Game List</h3>

                    <img className="project-img" src={gamelistGif} alt="screenshot of a list of video games" />

                    <p>A web app using data from the RAWG.io API, a videogame database. Users can search for games from across different platforms, and save to a wishlist or favourites.<br />
                    Originally built with React & React Router, then rebuilt in Next, with continuous deployment from a GitHub repo to Netlify.</p>

                    <a href="https://mchlol-gamelist.netlify.app/" target="_blank">
                        <button><MdVisibility /> Live</button>
                    </a>
                    
                    <a href="https://github.com/mchlol/next-game-list" target="_blank">
                        <button><MdCode />Code</button>
                    </a>

                </div>

                <div className="svg-container">
                    <HiSparkles />
                </div>

                <div className="projects-group">
                    
                    <ProjectCard title="Colours" img={colorsGif} description="A NextJS project based on Pantone Colo(u)r of the Year" liveUrl="https://mchlol-next-colors.netlify.app/" codeUrl="https://github.com/mchlol/colors" />

                    <ProjectCard title="Quizzical" img={quizzicalGif} description="A React quiz app using data from the OpenTriviaDB API" liveUrl="https://mchlol-quiz.netlify.app/" codeUrl="https://github.com/mchlol/quizzical" />

                    <ProjectCard title="Tenzies" img={tenziesGif} description="A React dice game with time tracking and score saving" liveUrl="https://mchlol.github.io/tenzies/" codeUrl="https://github.com/mchlol/tenzies" />

                    <ProjectCard title="Password Generator" img={passwordGif} description="Set parameters to make secure passwords and copy to clipboard" liveUrl="https://mchlol.github.io/password-generator/" codeUrl="https://github.com/mchlol/password-generator" />
                    
                </div>
                    
            </div>

        </main>
    )
};