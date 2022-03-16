import React from "react";
// import {Link} from 'react-router-dom';
import  Axios  from "axios";

export default class Transaction extends React.Component{
    constructor(props){
        super(props);
        this.handleAmountChange= this.handleAmountChange.bind(this);
        this.handleToChange=this.handleToChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.state={
            to:'',
            amount:'',
            customers:[],
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/customers')
            .then(res=>{
                this.setState({
                    customers:res.data
                })
            })
            .catch(err=>console.log(err.message))
    }

    handleAmountChange=(e)=>{
        const name=e.target.name
        const value= e.target.value
        this.setState({
            [name]:value
        })
    }

    handleToChange=(e)=>{
        this.setState({
            to:e.target.value
        })
    }

    handleClick=()=>{
        this.props.closeToggle();
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const from= this.props.customerId
        var to= this.state.to
        const amount= this.state.amount
        const trans={
            from:from,
            to:to,
            amount:amount
        }
        if(trans.to === trans.from){
            window.alert('Sending Monet to Yourself!')
        }
        else{
            Axios.post('http://localhost:5000/transactions', trans)
                .then(res => {
                    this.setState({
                        to:'', 
                        amount:'',
                        showPopup:true
                    })
                    window.alert(res.data);
                    window.location.href="/customers"
                })
                .catch(err=>window.alert(err.message));
        }
        
    }

    render(){
        return(
            <div>
                <div 
                    style={{
                        display:'flex', 
                        justifyContent:'center',
                        alignItems:'center',
                        position:'absolute', 
                        top:'0',
                        height:'100vh',
                        width:'100vw',
                        backdropFilter:'blur(3px)',
                        background: "rgba(0, 0, 0, 0.5)"
                    }}>
                    
                    <form action="#" onSubmit={this.handleSubmit}
                        style={{
                            background: 'white',
                            padding: '43px',
                            }}>
                        <h3 className="fw-bold">Transfer Money</h3>
                        <div>
                            <label className="form-label" style={{color:"black",fontWeight:"bold"}}>From:</label>
                            <input type="text" 
                            className="form-control bg-light"
                            value={this.props.customerName}
                            readOnly
                            required/>
                        </div>
                        <div>
                            <label className="form-label" style={{color:"black", fontWeight:"bold"}}>To:</label>
                            <select className="form-select"
                                value={this.state.to} 
                                onChange={this.handleToChange}>
                                <option selected value="hello">Select the Receiver</option>
                                {this.state.customers.map((data, index)=>{
                                    return(
                                        <option key={index} value={data._id}>{data.name}</option>
                                    )
                                })}
                            </select> 
                        </div>    
                        <div>
                            <label className="form-label" style={{color:"black",fontWeight:"bold"}}>Amount: </label>
                            <input type="number" 
                            name="amount"
                            className="form-control"
                            value={this.state.amount}
                            onChange={this.handleAmountChange}
                            required/>
                        </div>
                        <div
                            style={{
                                display:'flex',
                                justifyContent:'space-between',
                                margin:'10px 0px'
                            }}>
                            <button type="submit" className="btn btn-info btn-md text-uppercase">Transfer</button>
                            <button type="button" className="btn btn-danger btn-md text-uppercase" onClick={this.handleClick}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}