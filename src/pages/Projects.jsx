import React from "react";
import gamelistGif from '../assets/project-gamelist.gif';
import tenziesGif from '../assets/project-tenzies.gif';
import passwordGif from '../assets/project-password-generator.gif';
import quizzicalGif from '../assets/project-quizzical.gif'
import colorsGif from '../assets/project-colors.gif'
import { MdCode, MdVisibility } from "react-icons/md";
import ScrollToTop from '../components/ScrollToTop';


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
                    <svg width="65" height="75" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64.5559 35.2985L56.6101 37.303C49.3503 39.1361 43.6758 46.0529 42.1705 54.9095L40.5279 64.5969L38.8854 54.9095C37.3801 46.0529 31.7056 39.1361 24.442 37.303L16.5 35.2985L24.442 33.2939C31.7056 31.4609 37.3801 24.5402 38.8854 15.6874L40.5279 6L42.1705 15.6874C43.6758 24.5402 49.3503 31.4609 56.6101 33.2939L64.5559 35.2985Z" fill="#D9D9D9"/>
                        <path d="M23 61.6854L17.2897 62.2628C14.5733 62.7897 12.4521 64.7833 11.8905 67.3312L11.2751 75L10.6598 67.3312C10.0982 64.7833 7.97694 62.7897 5.26053 62.2628L0 61.6854L5.26053 61.108C7.97694 60.5811 10.0982 58.5875 10.6598 56.0376L11.2751 46L11.8905 56.0376C12.4521 58.5875 14.5733 60.5811 17.2897 61.108L23 61.6854Z" fill="#D9D9D9"/>
                        <path d="M18.3932 8.32689L16.3467 8.89853C14.4717 9.42063 13.0083 11.3871 12.6196 13.9023L12.1966 16.6576L11.7736 13.9023C11.3848 11.3871 9.92145 9.42063 8.05028 8.89853L6 8.32689L8.05028 7.75906C9.92145 7.23696 11.3848 5.27052 11.7736 2.75149L12.1966 0L12.6196 2.75149C13.0083 5.27052 14.4717 7.23696 16.3467 7.75906L18.3932 8.32689Z" fill="#D9D9D9"/>
                    </svg>
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