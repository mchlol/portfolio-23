import React from "react";
import gamelist1 from "../assets/p_gamelist2_1.png";
import gamelist2 from "../assets/p_gamelist2_2.png";
import gamelist3 from "../assets/p_gamelist2_3.png";
import gamelist4 from "../assets/p_gamelist2_4.png";
import mj1 from "../assets/p_mj_1.png";
import mj2 from "../assets/p_mj_2.png";
import mj3 from "../assets/p_mj_3.png";
import mj4 from "../assets/p_mj_4.png";

import tenziesGif from '../assets/project-tenzies.gif';
import passwordGif from '../assets/project-password-generator.gif';
import quizzicalGif from '../assets/project-quizzical.gif'
import colorsGif from '../assets/project-colors.gif'
import ScrollToTop from '../components/ScrollToTop';

import ProjectCard from "../components/ProjectCard";
import ProjectCardFeatured from "../components/ProjectCardFeatured";


export default function Projects() {
    return (
        <main className="projects-section">
            <ScrollToTop />
            <h2 className="section-header">Projects</h2>

            <div className="project-wrapper">
                
                <ProjectCardFeatured 
                    title="GameList"
                    img={gamelist2}
                    description={<p>This was my final project for JavaScript Development at General Assembly. I created a web app using data from the RAWG.io API, a videogame database. Users can search for games from across different platforms, and save to a wishlist or favourites. I created this because while I was in the program a game I really wanted to play came out but I didn't have time to play it!<br />
                    Originally built with React & React Router, then rebuilt in Next, with continuous deployment from a GitHub repo to Netlify.</p>}
                    codeUrl="https://github.com/mchlol/next-game-list"
                    liveUrl="https://mchlol-gamelist.netlify.app/"
                    img2={gamelist4}
                    img3={gamelist1}
                    img4={gamelist3}
                />

                <ProjectCardFeatured 
                    title="MJ Printing"
                    img={mj1}
                    description={<p>A brochure website for a small local business using WordPress. I created all content from scratch, including writing all the copy including blog posts, taking professional-looking photos, creating graphics (even a video!) and learning SEO best practices.<br />
                    I didn't know anything about modern web development when I took over this project and had to learn how to do pretty much everything on my own, including troubleshooting and learning how to navigate cPanel, create a staging environment and how to deploy.</p>}
                    liveUrl="https://www.mjprinting.com.au"
                    img2={mj2}
                    img3={mj3}
                    img4={mj4}
                />

                <h3>Other projects</h3>

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