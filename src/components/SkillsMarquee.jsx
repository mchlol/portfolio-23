import React from "react";
import Marquee from "react-fast-marquee";

export default function SkillsMarquee() {

    // only scroll when prefers reduced motion is not on - look into correct media query for this

    return (
        <Marquee
        className="marqueeContainer"
        pauseOnHover="true"
        play="false">
            <span className="marquee-item">HTML</span>
            <span className="marquee-item">CSS</span>
            <span className="marquee-item">JavaScript</span>
            <span className="marquee-item">Git</span>
            <span className="marquee-item">Sass</span>
            <span className="marquee-item">Flexbox</span>
            <span className="marquee-item">CSS Grid</span>
            <span className="marquee-item">React</span>
            <span className="marquee-item">Node</span>
            <span className="marquee-item">Tailwind</span>
            <span className="marquee-item">WordPress</span>
        </Marquee>
    )
}