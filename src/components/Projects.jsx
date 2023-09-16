import React from "react";
import ProjectScreenshot from '../assets/game-list.png'

export default function Projects() {
    return (
        <div className="segmented">

            <div className="textSide projectsText">
                <h2>Projects</h2>
                <h3>Game List</h3>
                <p>A web app for users to save games from across different platforms to a series of lists. Built with React and React Router, using data from the RAWG.io API.</p>
                <p>Capstone project for General Assembly JavaScript Development.</p>

                <button>View more</button>
            </div>

            <div className="imgSide projects-img-container">
               <img className="project-screenshot" src={ProjectScreenshot} alt="screenshot of a list of video games" />
            </div>
                
        </div>
    )
};