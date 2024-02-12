import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import { HiSparkles } from "react-icons/hi2";

export default function Nav() {

    return (
        <div className="visible">
            <nav className="navMobile">

                <div className="nav-logo-wrap">
                    <NavLink
                    to="/"
                    className={ (obj) => obj.isActive ? "nav-link active-link align" : "nav-link align"}
                    >
                        <div className="logo-svg-container">
                            <HiSparkles />
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
        </div>
    )
}