import { NavLink } from "react-router-dom";
import SparkGrey from "../assets/spark.svg"

export default function Nav() {

    return (
        <nav>
            <div>
                <NavLink
                to="/"
                className={ (obj) => obj.isActive ? "nav-link active-link align" : "nav-link align"}
                >
                    <img src={SparkGrey} alt="a lil grey spark shape"
                    className="logo colour" 
                    height={15}/>
                    Home
                </NavLink>
            </div>
            <ul>
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
            </ul>
        </nav>
    )
}