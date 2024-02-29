import React from 'react';
import { MdCode, MdVisibility } from "react-icons/md";

export default function ProjectCard(props) {

    const {title, img, description, liveUrl, codeUrl } = props;

    return (
        <div className="resize-project project-img-container gradient-border">
            <h3>{title}</h3>

            <img className="project-img" src={img} alt="" width="300px" height="250px"/>

            <p>{description}</p>

            <a href={liveUrl} target="_blank"><button><MdVisibility />
                Live
            </button></a>

            <a href={codeUrl} target="_blank"><button><MdCode />
                Code
            </button></a>
        </div>
    )
};