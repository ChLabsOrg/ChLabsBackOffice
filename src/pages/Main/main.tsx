import { ReactElement } from "react";
import './main.css';
import { Link } from "react-router-dom";

const Main = (): ReactElement => {
    return(
        <section className="main">
            Main Page!
            
            <br />
            <Link to="/login">
                Login
            </Link>

            <br />
            <Link to="/forgot-password">
                Forgot Password
            </Link>

            <br />
            <Link to="/dashboard">
                Dashboard
            </Link>
        </section>
    );
};

export default Main;