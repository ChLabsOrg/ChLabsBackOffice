import { ChangeEvent, Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/button";
import ToastService from "../../services/toastService";
import AdministratorService from "../../services/administratorService";
import './forgot-password.css';

class ForgotPassword extends Component{
    _administratorService: AdministratorService;
    _toastService: ToastService;

    constructor(props: any){
        super(props);

        this._toastService = new ToastService();
        this._administratorService = new AdministratorService();
        if(this._administratorService.administratorAlreadyLogged())
        {
            var userData = this._administratorService.getLoggedAdministratorData();
            if (userData.remember)
                window.location.href = "/dashboard";
            else
                this._administratorService.logoutAdministrator();
        }
    }

    state = {
        isLoading: false,
        email: ""
    }

    forgotPasswordButtonHandleClick = async () => {
        this.setState({isLoading: true});

        if(this.fieldsAreValid(this.state.email)){
            const response = await this._administratorService.recoveryAdministratorPassword(
                this.state.email);

            if (!response.success)
                this._toastService.showErrorMessage(response.message);
            else
                this._toastService.showSuccessMessage(response.message);
        }

        this.setState({isLoading: false});
    }

    onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({email: event.target.value});
    }

    fieldsAreValid = (email: String): boolean =>
    {
        if(email === ""){
            this._toastService.showErrorMessage('Please insert a valid email!');
            return false;
        }

        return true;
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
                                <input 
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onEmailChange}/>
                            </div>

                            <div className="forgot-input-container container-have-account">
                                <Link to="/login">Already have account?</Link>
                            </div>

                            <Button 
                                className = "form-button"
                                text = "Reset Password"
                                onClick={this.forgotPasswordButtonHandleClick}
                                isLoading={this.state.isLoading} />
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}   

export default ForgotPassword;