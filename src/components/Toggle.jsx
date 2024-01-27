import React from "react"
import { LuMoonStar, LuSun } from "react-icons/lu";


export default function DarkModeToggle() {

    const [isDarkMode, setIsDarkMode] = React.useState(false);

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
        <span className="toggle"
        onClick={() => setIsDarkMode(prevIsDarkMode => !prevIsDarkMode)}>
            {
                isDarkMode
                ? <LuMoonStar />
                : <LuSun />
            }
        </span>
    );
};