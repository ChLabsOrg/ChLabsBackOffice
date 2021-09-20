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
        </section>
    );
};

export default Main;