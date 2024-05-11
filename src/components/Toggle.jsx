import React from "react"
import { LuMoonStar, LuSun } from "react-icons/lu";
import { motion } from "framer-motion";

export default function DarkModeToggle() {

    const [isRotated, setIsRotated] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    function handleClick() {
        setIsRotated(!isRotated);
    };

    React.useEffect( () => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.remove('dark-mode')
            document.body.classList.add('light-mode')
        }
    },[isDarkMode]);

    return (
        <motion.div
            onClick={handleClick}
            animate={{ rotate: isRotated ? 360 : 0 }}
            whileHover={{ scale: 1.7 }}
            transition={ {duration: 0.5 }}
            >
                <span className="toggle"
                onClick={() => setIsDarkMode(prevIsDarkMode => !prevIsDarkMode)}>

                    {
                        isDarkMode
                        ? <LuMoonStar key="dark"/>
                        : <LuSun key="light"/>
                    }

                </span>
            </motion.div>
    );
};