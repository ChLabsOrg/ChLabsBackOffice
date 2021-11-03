import './main.css';
import { Component } from "react";
import AdministratorService from '../../services/administratorService';

class Main extends Component {
    constructor(props: any){
        super(props);
        const _administratorService = new AdministratorService();

        if(_administratorService.administratorAlreadyLogged())
            window.location.href = "/dashboard";
        else
            window.location.href = "/login";
    }

    render(){
        return(
            <section className="main">
                <div className="loading-container">
                    <div className="loading-icon"></div>
                </div>
            </section>
        );
    }
};

export default Main;