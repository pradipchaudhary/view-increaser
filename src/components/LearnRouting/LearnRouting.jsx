import { NavLink } from "react-router-dom";

const LearnRouting = () => {
    return (
        <div>
            <a to="/">Home</a>
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export default LearnRouting;
