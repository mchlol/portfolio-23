import { NavLink } from "react-router-dom";
import SparkGrey from "../assets/spark-grey.svg"

export default function Nav() {

    return (
        <nav>
            <div>
                <NavLink
                to="/"
                className={ (obj) => obj.isActive ? "active-link align" : "align"}
                >
                    <img src={SparkGrey} alt="a lil grey spark shape"
                    className="colour" 
                    height={20}/>
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