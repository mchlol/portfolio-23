import React from "react";
import gameListScreenshot from '../assets/game-list.png'
import libraryGif from '../assets/project-library.gif';
import pixelGif from '../assets/project-pixel-sketchpad.gif';
import tictacGif from '../assets/project-tictactoe.gif';
import superdrawGif from '../assets/project-superdraw.gif';
import tenziesGif from '../assets/project-tenzies.gif';
import passwordGif from '../assets/project-password-generator.gif';





export default function Projects() {
    return (
        <section className="projects-section">
            <h2>Projects</h2>

            <div className="project-wrapper">

                <div className="project-description">

                    <h3>Game List</h3>
                    <p>Capstone project for the <a href="https://generalassemb.ly/education/javascript-development/sydney" target="_blank">JavaScript Development</a> course at General Assembly.</p>
                    <p>A web app for users to save games from across different platforms to a series of lists, such as wishlist or favourites.<br />
                    Built with React and React Router, along with Tailwind CSS and DaisyUI for React. Data is from the RAWG.io API.</p>

                </div>

                <div className="project-img-container">
                    <img className="project-img" src={gameListScreenshot} alt="screenshot of a list of video games" />
                    <a href="https://github.com/mchlol/jsd-game-list" target="_blank"><button>View on GitHub</button></a>
                </div>

                <div className="projects-group">
                    <div className="resize-project project-img-container">
                        <img className="project-img" src={tenziesGif} alt="" />
                        <a href="https://github.com/mchlol/tenzies" target="_blank"><button>View on GitHub</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <img className="project-img" src={passwordGif} alt="" />
                        <a href="https://github.com/mchlol/password-generator" target="_blank"><button>View on GitHub</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <img className="project-img" src={libraryGif} alt="" />
                        <a href="https://github.com/mchlol/library" target="_blank"><button>View on GitHub</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <img className="project-img" src={pixelGif} alt="" />
                        <a href="https://github.com/mchlol/etchasketch" target="_blank"><button>View on GitHub</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <img className="project-img" src={tictacGif} alt="" />
                        <a href="https://github.com/mchlol/tictactoe" target="_blank"><button>View on GitHub</button></a>
                    </div>
                    <div className="resize-project project-img-container">
                        <img className="project-img" src={superdrawGif} alt="" />
                        <a href="https://github.com/mchlol/superdraw" target="_blank"><button>View on GitHub</button></a>
                    </div>
                    
                </div>
                    
            </div>

        </section>
    )
};