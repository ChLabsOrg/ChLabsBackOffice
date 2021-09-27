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
                            <div className="dashboard-card">
                                <div className="dashboard-card-title">
                                    <h3>Total de Alunos</h3>
                                </div>
                                <div className="dashboard-card-content">
                                  <h1>120</h1> 
                                </div>
                            </div>

                            <div className="dashboard-card">
                                <div className="dashboard-card-title">
                                    <h3>Visitas Mensais</h3>
                                </div>
                                <div className="dashboard-card-content">
                                  <h1 className="card-danger-text">950</h1>  
                                </div>
                            </div>

                            <div className="dashboard-card">
                                <div className="dashboard-card-title">
                                    <h3>Vendas Mensais</h3>
                                </div>
                                <div className="dashboard-card-content">
                                  <h1 className="card-success-text">R$ 1200,00</h1>  
                                </div>
                            </div>

                            <div className="dashboard-card">
                                <div className="dashboard-card-title">
                                    <h3>Tickets Mensais</h3>
                                </div>
                                <div className="dashboard-card-content">
                                  <h1>10</h1>  
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
            </section>
        );
    }
}   

export default Dashboard;