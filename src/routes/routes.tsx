import { ReactElement } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "../pages/Login/login";
import Main from '../pages/Main/main';
import ForgotPassword from '../pages/ForgotPassword/forgot-password';

const Routes = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;