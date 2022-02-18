import  Axios  from "axios";
import React from "react";
import moment from 'moment';
import Navbar from "./Navbar";
import image from './images/background_page.jpg'


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
            <div style={{backgroundRepeat:'repeat-y'}}>
                <img src={image} alt="helloworldbank"
                    style={{
                        width:'100vw',
                        position:'absolute',
                        opacity:'1',
                        zIndex:'-1'
                    }}/>
                <Navbar/>
                <div style={{padding:"40px"}} >
                    <table style={{background: 'rgba(255,255,255,0.9)'}} className="table table-striped table-bordered">
                        <thead>
                            <tr>
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