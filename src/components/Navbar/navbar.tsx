import { Link } from 'react-router-dom';
import './navbar.css';

interface INavbarProps {
    menuChecked?: number;
  }

const Navbar: React.FC<INavbarProps> = ({
    menuChecked
}) => {
    return (
        <div className="ch-navbar">
            <div className="ch-navbar-title">
                <Link to="/dashboard">
                    <p>ChLabs</p>
                    <span className="ch-navbar-accordeon">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>
                </Link>
            </div>

            <div className="ch-navbar-user">
                <div className="ch-navbar-user-image-container">
                    <div className="ch-navbar-user-image">
                        <a href="https://eschechola.com.br/images/me.png">
                            <img src="https://eschechola.com.br/images/me.png" />
                        </a>
                    </div>
                </div>
                <div className="ch-navbar-user-info">
                    <h6>Lucas Eschechola</h6>
                    <p>Administrator</p>
                </div>
            </div>

            <hr />

            <div className="ch-navbar-menu">
                <div className="ch-navbar-menu-container">
                    <Link to="/dashboard">
                        <div className="ch-navbar-menu-container-item">
                            <span>
                                <i className="fa fa-home" aria-hidden="true"></i>
                                Dashboard
                            </span>
                        </div>
                    </Link>

                    <Link to="/dashboard">
                        <div className="ch-navbar-menu-container-item">
                            <span>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                Orders
                            </span>
                        </div>
                    </Link>

                    <Link to="/dashboard">
                        <div className="ch-navbar-menu-container-item">
                            <span>
                                <i className="fa fa-file-text" aria-hidden="true"></i>
                                Articles
                            </span>
                        </div>
                    </Link>

                    <Link to="/dashboard">
                        <div className="ch-navbar-menu-container-item">
                            <span>
                                <i className="fa fa-book" aria-hidden="true"></i>
                                Courses
                            </span>
                        </div>
                    </Link>

                    <Link to="/dashboard">
                        <div className="ch-navbar-menu-container-item">
                            <span>
                                <i className="fa fa-user" aria-hidden="true"></i>
                                Accounts
                            </span>
                        </div>
                    </Link>

                    <Link to="/dashboard">
                        <div className="ch-navbar-menu-container-item">
                            <span>
                                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                Newsletter
                            </span>
                        </div>
                    </Link>

                    <Link to="/dashboard">
                        <div className="ch-navbar-menu-container-item">
                            <span>
                                <i className="fa fa-ticket" aria-hidden="true"></i>
                                Tickets
                            </span>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
  };
  
  export default Navbar;