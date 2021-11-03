import { ChangeEvent, Component } from "react";
import Checkbox from "../../components/Checkbox/checkbox";
import Button from "../../components/Button/button";
import './login.css';
import { Link } from "react-router-dom";
import AdministratorService from "../../services/administratorService";
import 'react-toastify/dist/ReactToastify.css';
import ToastService from "../../services/toastService";

class Login extends Component{
    _administratorService : AdministratorService;
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
        remember: true,
        isLoading: false,
        username: "",
        password: ""
    }
    
    handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.setState({remember: event.target.checked});
    }

    onUsernameChange = (event: any) => {
        this.setState({username: event.target.value});
    }

    onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({password: event.target.value});
    }

    loginButtonHandleClick = async () => {
        this.setState({isLoading: true});

        if(this.fieldsAreValid(this.state.username, this.state.password)){
            const response = await this._administratorService.loginAdministrator(
                this.state.username,
                this.state.password,
                this.state.remember);

            if (!response.success)
            {
                this._toastService.showErrorMessage(response.message);
                this.setState({isLoading: false});
            }
            else
            {
                this._toastService.showSuccessMessage(response.message);
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1500); 
            }
        }
    }

    fieldsAreValid = (username: String, password: String): boolean =>
    {
        if(username === ""){
            this._toastService.showErrorMessage('Please insert a valid username!');
            return false;
        }

        if(password === ""){
            this._toastService.showErrorMessage('Please insert a valid password!');
            return false;
        }

        return true;
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
                                <label>Username</label>
                                <br />
                                <input 
                                    type="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onUsernameChange} />
                            </div>
                            <div className="login-input-container">
                                <label>Password</label>
                                <br />
                                <input 
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onPasswordChange} />
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