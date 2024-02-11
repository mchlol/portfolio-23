import React from 'react';
import ShadowBox from './ShadowBox';
import Sparks from "./Sparks"
import TypingText from './TypingText';

export default function Feature() {
    return (
        <div className="feature">
            <ShadowBox classNames="feature--top">
                <Sparks />
            </ShadowBox>

            <ShadowBox classNames="feature--center">
                <h1 style={{textAlign: "right", margin: "0"}}>Hello! <span className="gradient-text">Salut!</span></h1>
            </ShadowBox>

            <ShadowBox classNames="feature--bRight">
                <div className="terminal">
                    <TypingText />
                </div>
            </ShadowBox>
        </div>
    )
}

