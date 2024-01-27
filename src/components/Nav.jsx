import { NavLink } from "react-router-dom";
import Toggle from "./Toggle"

export default function Nav() {

    return (
        <nav>
            <div>
                <NavLink
                to="/"
                className={ (obj) => obj.isActive ? "nav-link active-link align" : "nav-link align"}
                >
                    <div className="logo-svg-container">
                        <svg width="49" height="59" viewBox="0 0 49 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48.0559 29.2985L40.1101 31.303C32.8503 33.1361 27.1758 40.0529 25.6705 48.9095L24.0279 58.5969L22.3854 48.9095C20.8801 40.0529 15.2056 33.1361 7.94199 31.303L0 29.2985L7.94199 27.2939C15.2056 25.4609 20.8801 18.5402 22.3854 9.68739L24.0279 0L25.6705 9.68739C27.1758 18.5402 32.8503 25.4609 40.1101 27.2939L48.0559 29.2985Z" fill="#D9D9D9"/>
                        </svg>
                    </div>

                    Home

                </NavLink>
            </div>
            <div className="links">
                <NavLink
                to="/about"
                className={ (obj) => obj.isActive ? "nav-link active-link" : 'nav-link'}
                >
                    About
                </NavLink>
                <NavLink
                to="/projects"
                className={ obj => obj.isActive ? "nav-link active-link" : 'nav-link'}
                >
                    Projects
                </NavLink>
            </div>
            <div>
                <Toggle />
            </div>
        </nav>
    )
}