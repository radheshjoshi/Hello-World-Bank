import React from "react";
import Axios from 'axios'
import Transaction from "./transaction";
import Navbar from "./Navbar";


export default class Customers extends React.Component{
    constructor(){
        super();
        this.handleClick= this.handleClick.bind(this);
        this.state={
            customers:[],
            toggleModal:false,
            temp:'',
            temp2:'',
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/customers')
            .then(res =>{
                this.setState({
                    customers:res.data
                })
            })
            .catch(err=>console.log(err.message));
    }

    handleClick=(e)=>{
        this.setState({
            toggleModal:!this.state.toggleModal,
            temp:e.target.value,
            temp2:e.target.name,
        })
    }
    closeToggle=()=>{
        this.setState({
            toggleModal:false
        })
    }
    render(){
        return(
            <div>
                <Navbar/>
                <h3 className="text-center text-uppercase font-weight-bold">customers page</h3>
                <div className="container shadow px-0 rounded">
                    <table className="table table-striped table-bordered text-center my-auto">
                        <thead>
                            <tr className="text-uppercase">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.customers.map((data, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.balance}</td>
                                        <td>
                                            <button value={data.name} 
                                                name={data._id}
                                                className="btn btn-primary btn-md text-uppercase" 
                                                onClick={this.handleClick}>
                                                    Show Details
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    {this.state.toggleModal ? <Transaction 
                        customerName={this.state.temp} 
                        customerId={this.state.temp2}
                        closeToggle={this.closeToggle}
                        />: null}
                </div>
            </div>
        )
    }
}