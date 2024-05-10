import React from 'react';
import { MdCode, MdVisibility } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";

export default function ProjectCardFeatured(props) {

    const {title, img, img2, img3, img4, description, liveUrl } = props;
    const codeUrl = props.codeUrl || null;

    return (
        <div className="project-featured">

            <div className="project-featured--content">
            
                <div className="project-featured--left">
                    <a href={liveUrl}><img className="project-featured--img project-img gradient-border" src={img} alt="project screenshot" width="504px" height="267px"/></a>
                
                </div>

                <div className="project-featured--right">
                    <h3>{title}</h3>
                    {description}
                    <div className="project-btns">
                        <a href={liveUrl} target="_blank"><button><MdVisibility />
                            Live
                        </button></a>
                        {
                            codeUrl
                            &&
                            <a href={codeUrl} target="_blank"><button><MdCode />
                            Code
                            </button></a>
                        }
                        
                    </div>
                </div>

            </div>

            <div className="project-featured--pics">
                <img className="project-img gradient-border" src={img2} alt="project screenshot" width="404px" height="213px"/>
                <img className="project-img gradient-border" src={img3} alt="project screenshot" />
                <img className="project-img gradient-border" src={img4} alt="project screenshot" />
            </div>

            <div className="project-featured--divider">
                <div className="projects-svg-container">
                    <HiSparkles />
                </div>
            </div>
            
        </div>
    )
};