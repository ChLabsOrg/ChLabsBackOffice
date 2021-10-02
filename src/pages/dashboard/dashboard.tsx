import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import './dashboard.css';

interface IDashboardViewModel { }

class Dashboard extends Component<IDashboardViewModel>{
    state = {
        currentDate: new Date().toString().substr(0, 28)
    }

    getLastSalesTable = () => {
        var rows = [];
        for(var i =0; i < 8; i++){
            rows.push(
            <tr key={i}>
                <td>{i + 1}</td>
                <td>Luqueta</td>
                <td>R$ {i * 100}</td>
            </tr>);
        }

        return (
            <table className="dashboard-list-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Transaction Value</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        );
    }

    render(){
        return(
            <section className="dashboard">
               <Navbar />
               <div className="dashboard-container">
                   <div className="dashboard-itens">
                        <div className="dashboard-title">
                            <h3>Dashboard</h3>
                            <p>Welcome abboard, <strong>Lucas Eschechola</strong>, your dashboard is updated at: <strong>{this.state.currentDate}</strong></p>
                        </div>

                        <div className="dashboard-cards-container">
                            <div className="dashboard-card dashboard-component">
                                <div className="dashboard-card-title">
                                    <h3>Total Students</h3>
                                </div>
                                <div className="dashboard-card-content">
                                  <h1>120</h1> 
                                </div>
                            </div>

                            <div className="dashboard-card dashboard-component">
                                <div className="dashboard-card-title">
                                    <h3>Monthly Visits</h3>
                                </div>
                                <div className="dashboard-card-content">
                                  <h1 className="card-danger-text">950</h1>  
                                </div>
                            </div>

                            <div className="dashboard-card dashboard-component">
                                <div className="dashboard-card-title">
                                    <h3>Monthly Sales (R$)</h3>
                                </div>
                                <div className="dashboard-card-content">
                                  <h1 className="card-success-text">R$ 1200,00</h1>  
                                </div>
                            </div>

                            <div className="dashboard-card dashboard-component">
                                <div className="dashboard-card-title">
                                    <h3>Monthly Tickets</h3>
                                </div>
                                <div className="dashboard-card-content">
                                  <h1>10</h1>  
                                </div>
                            </div>
                        </div>

                        <div className="dashboard-lists-container">
                            <div className="dashboard-list dashboard-component">
                                <div className="dashboard-list-title">
                                    <h1>Last Sales</h1>
                                </div>

                                <div className="dashboard-list-itens">
                                    {this.getLastSalesTable()}
                                </div>

                                <div className="dashboard-list-button">
                                    <button type="button">See all</button>
                                </div>
                            </div>
                            
                            <div className="dashboard-list dashboard-component">
                                <div className="dashboard-list-title">
                                    <h1>Last Sales</h1>
                                </div>

                                <div className="dashboard-list-itens">
                                    {this.getLastSalesTable()}
                                </div>

                                <div className="dashboard-list-button">
                                    <button type="button">See all</button>
                                </div>
                            </div>

                            <div className="dashboard-list dashboard-component">
                                <div className="dashboard-list-title">
                                    <h1>Last Sales</h1>
                                </div>

                                <div className="dashboard-list-itens">
                                    {this.getLastSalesTable()}
                                </div>

                                <div className="dashboard-list-button">
                                    <button type="button">See all</button>
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