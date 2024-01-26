import React from "react";
import gamelistGif from '../assets/project-gamelist.gif';
import tenziesGif from '../assets/project-tenzies.gif';
import passwordGif from '../assets/project-password-generator.gif';
import quizzicalGif from '../assets/project-quizzical.gif'
import colorsGif from '../assets/project-colors.gif'
import { MdCode, MdVisibility } from "react-icons/md"
import Sparks from '../assets/Sparks.png'


export default function Projects() {
    return (
        <section className="projects-section">
            <h2 className="section-header">Projects</h2>

            <div className="project-wrapper">

                <div className="project-description">

                    <h3 className="main-project-header">Game List</h3>

                    <div className="project-img-container">

                        <img className="project-img" src={gamelistGif} alt="screenshot of a list of video games" />

                        <a href="https://mchlol-gamelist.netlify.app/" target="_blank">
                            <button><MdVisibility /> Live</button>
                        </a>
                        <a href="https://github.com/mchlol/next-game-list" target="_blank">
                            <button><MdCode />Code</button>
                        </a>

                    </div>

                    <p>Capstone project for the <a href="https://generalassemb.ly/education/javascript-development/sydney" target="_blank">JavaScript Development</a> course at General Assembly. I created a web app using data from the RAWG.io API, for users to search for games from across different platforms & save to their wishlist or favourites.<br />
                    Originally built with React & React Router then rebuilt in Next, along with Tailwind CSS and DaisyUI, with continuous deployment from a GitHub repo to Netlify.</p>

                </div>

                <div className="project-sparks-container">
                    <img className="sparks" src={Sparks} />
                </div>

                <div className="projects-group">
                    
                    <div className="resize-project project-img-container">
                        <h3>Colors</h3>
                        <img className="project-img" src={colorsGif} alt="" />
                        <a href="https://mchlol-next-colors.netlify.app/" target="_blank"><button><MdVisibility /> Live</button>
                        </a>
                        <a href="https://github.com/mchlol/colors" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <h3>Quizzical</h3>
                        <img className="project-img" src={quizzicalGif} alt="" />
                        <a href="https://mchlol-quiz.netlify.app/" target="_blank"><button><MdVisibility /> Live</button>
                        </a>
                        <a href="https://github.com/mchlol/quizzical" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                    <h3>Tenzies</h3>
                        <img className="project-img" src={tenziesGif} alt="" />
                        <a href="https://mchlol.github.io/tenzies/" target="_blank"><button><MdVisibility /> Live</button></a>
                        <a href="https://github.com/mchlol/tenzies" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <h3>Password Generator</h3>
                        <img className="project-img" src={passwordGif} alt="" />
                        <a href="https://mchlol.github.io/password-generator/" target="_blank"><button><MdVisibility /> Live</button></a>
                        <a href="https://github.com/mchlol/password-generator" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    
                </div>
                    
            </div>

        </section>
    )
};