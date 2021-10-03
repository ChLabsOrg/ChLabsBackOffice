import { ReactElement } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "../pages/login/login";
import Main from '../pages/main/main';
import ForgotPassword from '../pages/forgot-password/forgot-password';
import Dashboard from "../pages/dashboard/dashboard";

const Routes = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
                <Route exact path="/dashboard" component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;