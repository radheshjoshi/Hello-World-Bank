import  Axios  from "axios";
import React from "react";
import moment from 'moment';
import Navbar from "./Navbar";


export default class Transactions extends React.Component{
    constructor(props){
        super(props);
        this.state={
            transactions:[]
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:5000/transactions')
            .then(res=>{
                this.setState({
                    transactions:res.data
                })
            })
            .catch(err=>console.log(err.message))
    }

    render(){
        return(
            <div>
                <Navbar/>
                <h2 className="text-center   text-uppercase font-weight-bold">transcations page</h2>
                {/* <h6 className="text-center mb-4">last 10 transcations</h6> */}
                <div className='container shadow px-0 rounded'>
                    <table className="table table-hover table-bordered text-center my-auto">
                        <thead>
                            <tr className="text-uppercase font-weight-bold">
                                <th>From</th>
                                <th>To</th>
                                <th>Amount</th>
                                <th>Date  Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.transactions.map((data, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{data.from}</td>
                                        <td>{data.to}</td>
                                        <td>{data.amount}</td>
                                        <td>{moment(data.date).format("MMMM Do YYYY, h:mm:ss a")}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}