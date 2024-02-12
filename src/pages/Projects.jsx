import React from "react";
import gamelistGif from '../assets/project-gamelist.gif';
import tenziesGif from '../assets/project-tenzies.gif';
import passwordGif from '../assets/project-password-generator.gif';
import quizzicalGif from '../assets/project-quizzical.gif'
import colorsGif from '../assets/project-colors.gif'
import { MdCode, MdVisibility } from "react-icons/md";
import ScrollToTop from '../components/ScrollToTop';
import { HiSparkles } from "react-icons/hi2";


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
                    
                    <div className="resize-project project-img-container gradient-border">
                        <h3>Colors</h3>
                        <img className="project-img" src={colorsGif} alt="" />
                        <p>A NextJS project based on Pantone Colo(u)r of the Year</p>
                        <a href="https://mchlol-next-colors.netlify.app/" target="_blank"><button><MdVisibility /> Live</button>
                        </a>
                        <a href="https://github.com/mchlol/colors" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    <div className="resize-project project-img-container gradient-border">
                        <h3>Quizzical</h3>
                        <img className="project-img" src={quizzicalGif} alt="" />
                        <p>A quiz app using the <a href="https://opentdb.com/" target="_blank" rel="noopener noreferrer">Open Trivia DataBase API</a></p>
                        <a href="https://mchlol-quiz.netlify.app/" target="_blank"><button><MdVisibility /> Live</button>
                        </a>
                        <a href="https://github.com/mchlol/quizzical" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    <div className="resize-project project-img-container gradient-border">
                    <h3>Tenzies</h3>
                        <img className="project-img" src={tenziesGif} alt="" />
                        <p>A cute dice game</p>
                        <a href="https://mchlol.github.io/tenzies/" target="_blank"><button><MdVisibility /> Live</button></a>
                        <a href="https://github.com/mchlol/tenzies" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    <div className="resize-project project-img-container gradient-border">
                        <h3>Password Generator</h3>
                        <img className="project-img" src={passwordGif} alt="" />
                        <p>Does what it says on the tin, plus night mode!</p>
                        <a href="https://mchlol.github.io/password-generator/" target="_blank"><button><MdVisibility /> Live</button></a>
                        <a href="https://github.com/mchlol/password-generator" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    
                </div>
                    
            </div>

        </main>
    )
};