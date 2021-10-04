import { ChangeEvent, Component } from "react";
import Checkbox from "../../components/Checkbox/checkbox";
import Button from "../../components/Button/button";
import './login.css';
import { Link } from "react-router-dom";

interface ILoginFormViewModel {
    email: String
    password: String
}

class Login extends Component<ILoginFormViewModel>{    
    state = {
        remember: true,
        isLoading: false
    }
    
    loginViewModel : ILoginFormViewModel = {
        email: "",
        password: "",
    }
    
    handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
        // eslint-disable-next-line
        var { remember } = this.state;
        this.setState({remember: event.target.checked});
    }

    loginButtonHandleClick = () => {
        this.setState({isLoading: !this.state.isLoading});
    }

    render(){
        return(
            <section className="login">
                <div className="login-form">
                    <div className="login-form-content">
                        <h3>Sign In</h3>
                        <br />
                        <form className="login-form-size">
                            <div className="login-input-container">
                                <label>Email</label>
                                <br />
                                <input type="email" name="email"/>
                            </div>
                            <div className="login-input-container">
                                <label>Password</label>
                                <br />
                                <input type="password" name="password"/>
                            </div>
    
                            <div className="login-input-container container-checkbox">
                                <Checkbox className="remember-checkbox" checked={this.state.remember} onChange={this.handleCheckboxChange} />
                                <p>Remember me</p>
                            </div>

                            <div className="login-input-container container-forgot-password">
                                <Link to="/forgot-password">Forgot password?</Link>
                            </div>

                            <Button 
                                className = "login-form-button"
                                text = "Login"
                                onClick={this.loginButtonHandleClick}
                                isLoading={this.state.isLoading} />
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;