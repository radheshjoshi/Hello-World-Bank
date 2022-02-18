import React from "react";
import Axios from 'axios'
import Transaction from "./transaction";
import Navbar from "./Navbar";
import image from './images/background_page.jpg'


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
            temp3:e.target.id
        })
    }
    closeToggle=()=>{
        this.setState({
            toggleModal:false
        })
    }
    render(){
        return(
            <div style={{height:'100vh'}}>
                <img src={image} alt="helloworldbank"
                    style={{
                        width:'100vw',
                        height:'100vh',
                        position:'absolute',
                        opacity:'1',
                        zIndex:'-1'
                    }} />
                <Navbar/>
                <div style={{padding:'40px',}}>
                    <table style={{background:'rgba(255,255,255,0.9)'}}className="table table-striped table-bordered">
                        <thead>
                            <tr>
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
                                                onClick={this.handleClick}>
                                                    Transfer Money
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