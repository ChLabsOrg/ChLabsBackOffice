import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import './dashboard.css';

interface IDashboardViewModel { }

class Dashboard extends Component<IDashboardViewModel>{
    state = {}

    dashboardViewModel : IDashboardViewModel = { }

    render(){
        return(
            <section className="dashboard">
               <Navbar />
               <div className="dashboard-container">
                   <div className="dashboard-itens">
                        <div className="dashboard-title">
                            <h3>Dashboard</h3>
                            <p>Welcome abboard, <strong>Lucas Eschechola</strong></p>
                        </div>

                        <div className="dashboard-cards-container">
                            <div className="dashboard-card"></div>
                            <div className="dashboard-card"></div>
                            <div className="dashboard-card"></div>
                            <div className="dashboard-card"></div>
                        </div>
                   </div>
               </div>
            </section>
        );
    }
}   

export default Dashboard;