import { ReactElement } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "../pages/Login/login";
import Main from '../pages/Main/main';

const Routes = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;