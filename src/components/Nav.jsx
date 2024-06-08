import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import { HiSparkles } from "react-icons/hi2";

export default function Nav() {

    return (
            <nav className="navMobile visible glass">

                <div className="nav--left">
                    <div className="nav-logo-wrap">
                        <NavLink
                        to="/"
                        className={ (obj) => obj.isActive ? "nav-link active-link align" : "nav-link align"}
                        >
                            <div className="logo-svg-container">
                                <HiSparkles />
                            </div>
                        </NavLink>
                    </div>
                    <div className="links">
                        <NavLink
                        to="/"
                        className={ (obj) => obj.isActive ? "nav-link active-link" : 'nav-link'}
                        >
                            Home
                        </NavLink>
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
                        <NavLink
                        to="/blog"
                        className={ obj => obj.isActive ? "nav-link active-link" : "nav-link"}
                        >
                            Blog
                        </NavLink>
                    </div>
                </div>
            

                <div>
                    <Toggle />
                </div>
            </nav>
    )
}