import React from "react"

export default function DarkModeToggle() {
    const [isDark, setIsDark] = React.useState(true);


    React.useEffect( () => {
        if (isDark) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.remove('dark-mode')
            document.body.classList.add('light-mode')
        }
    },[isDark]);

    return (
        <input 
        type="checkbox" 
        onChange={ e => setIsDark(e.target.checked)}
        />
    );
};