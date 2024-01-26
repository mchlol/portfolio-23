import { NavLink } from "react-router-dom";

export default function Nav() {

    return (
        <nav>
            <div>
                <NavLink
                to="/"
                className={ (obj) => obj.isActive ? "active-link" : null}
                >
                    Home
                </NavLink>
            </div>
            <ul>
                <NavLink
                to="/about"
                className={ (obj) => obj.isActive ? "active-link" : null}
                >
                    About
                </NavLink>
                <NavLink
                to="/projects"
                className={ obj => obj.isActive ? "active-link" : null}
                >
                    Projects
                </NavLink>
            </ul>
        </nav>
    )
}