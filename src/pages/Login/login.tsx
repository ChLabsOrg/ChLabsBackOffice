import { ChangeEvent, Component } from "react";
import Checkbox from "../../components/Checkbox/checkbox";
import './login.css';

interface ILoginFormViewModel {
    email: String
    password: String
    remember: boolean
}

class Login extends Component<ILoginFormViewModel>{
    loginViewModel : ILoginFormViewModel = {
        email: "",
        password: "",
        remember: true
    }
    
    handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.loginViewModel.remember = event.target.checked;
        this.setState({checked: event.target.checked});
    }

    render(){
        return(
            <section className="login">
                <div className="login-form">
                    <div className="login-form-content">
                        <h3>Sign In</h3>
                        <br />
                        <form>
                            <div className="input-container">
                                <label>Email</label>
                                <br />
                                <input type="email" name="email"/>
                            </div>
                            <div className="input-container">
                                <label>Password</label>
                                <br />
                                <input type="password" name="password"/>
                            </div>
    
                            <div className="input-container container-checkbox">
                                <Checkbox checked={this.loginViewModel.remember} onChange={this.handleCheckboxChange} />
                            </div>
    
                            <button className="form-button">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;