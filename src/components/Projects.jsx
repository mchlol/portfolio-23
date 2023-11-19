import React from "react";
import gameListScreenshot from '../assets/game-list.png'
import libraryGif from '../assets/project-library.gif';
import pixelGif from '../assets/project-pixel-sketchpad.gif';
import tictacGif from '../assets/project-tictactoe.gif';
import superdrawGif from '../assets/project-superdraw.gif';
import tenziesGif from '../assets/project-tenzies.gif';
import passwordGif from '../assets/project-password-generator.gif';
import quizzicalGif from '../assets/project-quizzical.gif'
import colorsGif from '../assets/project-colors.gif'
import { MdCode, MdVisibility } from "react-icons/md"

export default function Projects() {
    return (
        <section className="projects-section">
            <h2 className="section-header">Projects</h2>

            <div className="project-wrapper">

                <div className="project-description">

                    <h3 className="main-project-header">Game List</h3>

                    <div className="project-img-container">

                        <img className="project-img" src={gameListScreenshot} alt="screenshot of a list of video games" />

                        <a href="https://jsd-game-list.netlify.app" target="_blank">
                            <button><MdVisibility /> Live</button>
                        </a>
                        <a href="https://github.com/mchlol/jsd-game-list" target="_blank">
                            <button><MdCode />Code</button>
                        </a>

                    </div>

                    <p>Capstone project for the <a href="https://generalassemb.ly/education/javascript-development/sydney" target="_blank">JavaScript Development</a> course at General Assembly. We were tasked with building a site to display data from any API of our choosing. I created a web app for users to save games from across different platforms to their wishlist or favourites.<br />
                    Built with React & React Router, along with Tailwind CSS and DaisyUI. Currently working on switching to Next.</p>

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
                    <div className="resize-project project-img-container">
                        <h3>Library</h3>
                        <img className="project-img" src={libraryGif} alt="" />
                        <a href="https://mchlol.github.io/library/" target="_blank"><button><MdVisibility /> Live</button></a>
                        <a href="https://github.com/mchlol/library" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <h3>Pixel Sketchpad</h3>
                        <img className="project-img" src={pixelGif} alt="" />
                        <a href="https://mchlol.github.io/etchasketch/" target="_blank"><button><MdVisibility /> Live</button></a>
                        <a href="https://github.com/mchlol/etchasketch" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <h3>TicTacToe</h3>
                        <img className="project-img" src={tictacGif} alt="" />
                        <a href="https://mchlol.github.io/tictactoe/" target="_blank"><button><MdVisibility /> Live</button></a>
                        <a href="https://github.com/mchlol/tictactoe" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <h3>SuperDraw</h3>
                        <img className="project-img" src={superdrawGif} alt="" />
                        <a href="https://mchlol.github.io/superdraw/" target="_blank"><button><MdVisibility /> Live</button></a>
                        <a href="https://github.com/mchlol/superdraw" target="_blank"><button><MdCode />Code</button></a>
                    </div>
                    
                </div>
                    
            </div>

        </section>
    )
};