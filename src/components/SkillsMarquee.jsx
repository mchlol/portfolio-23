import React from "react";
import Marquee from "react-fast-marquee";

export default function SkillsMarquee(props) {

    // only scroll when prefers reduced motion is not on - look into correct media query for this

    return (
        <Marquee
        className="marqueeContainer"
        pauseOnHover="true"
        play="false">
            { props.skills.map ( (skill, index) => 
            <span className="marquee-item"
            key={index}>
                {skill}
            </span>)}
        </Marquee>
    )
}