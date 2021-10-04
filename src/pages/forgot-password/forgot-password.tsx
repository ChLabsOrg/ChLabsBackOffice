import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/button";
import './forgot-password.css';

interface IForgotPasswordFormViewModel {
    email: String
}


class ForgotPassword extends Component<IForgotPasswordFormViewModel>{
    state = {
        isLoading: false
    }

    forgotPasswordViewModel : IForgotPasswordFormViewModel = {
        email: "",
    }

    loginButtonHandleClick = () => {
        this.setState({isLoading: !this.state.isLoading});
    }

    render(){
        return(
            <section className="forgot-password">
                <div className="forgot-password-form">
                    <div className="forgot-password-form-content">
                        <h3>
                            Forgot Password?
                            <br />
                            Recovery It
                        </h3>
                        <br />
                        <form>
                            <div className="forgot-input-container">
                                <label>Email</label>
                                <br />
                                <input type="email" name="email"/>
                            </div>

                            <div className="forgot-input-container container-have-account">
                                <Link to="/login">Already have account?</Link>
                            </div>

                            <Button 
                                className = "form-button"
                                text = "Reset Password"
                                onClick={this.loginButtonHandleClick}
                                isLoading={this.state.isLoading} />
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}   

export default ForgotPassword;