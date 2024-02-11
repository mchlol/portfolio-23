import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function TypingText() {
    const baseText = " npm run dev";
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => baseText.slice(0, latest));

    React.useEffect( () => {
        const controls = animate(count, baseText.length, {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
        })
        return controls.stop;
    },[]);

    return (
        <span className="">
            mb@mbp portfolio % 
            <motion.span>
                {displayText}
            </motion.span>
        </span>
    )
}