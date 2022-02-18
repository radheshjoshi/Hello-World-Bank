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
            showPopup:false,
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
        if(trans.to === ''){
            trans.to= this.state.customers[0]._id;
        }

        // console.log(trans);
        if(trans.to === trans.from){
            window.alert('Sending Money to Yourself!')
        }
        else{
            Axios.post('http://localhost:5000/transactions', trans)
            .then(res => {
                this.setState({
                    to:'', 
                    amount:'',
                    showPopup:true
                })
                console.log(res.data);
            })
            .catch(err=>console.log(err.message));
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
                    }}
                    
                    >
                    
                    <form action="#" onSubmit={this.handleSubmit}
                        style={{
                            background: 'white',
                            padding: '43px',
                            }}>
                        <h3 style={{color:'black', fontWeight:'bolder'}}>Transfer Money</h3>
                        <div>
                            <label className="form-label" style={{color:"black",fontWeight:"bold"}}>From:</label>
                            <input type="text" 
                            className="form-control"
                            value={this.props.customerName}
                            readOnly
                            required/>
                        </div>
                        <div>
                            <label className="form-label" style={{color:"black", fontWeight:"bold"}}>To:</label>
                            <select value={this.state.to} 
                                className="form-select"
                                onChange={this.handleToChange}>
                                <option selected>Select the Receipent</option>
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
                            <button type="submit" className="btn btn-primary">Transfer</button>
                            <button type="button" className="btn btn-secondary" onClick={this.handleClick}>Cancel</button>
                        </div>
                    </form>
                </div>
                <div>
                    {this.state.showPopup?<div className="container"
                        style={{
                            position:'absolute', 
                            top:'0',
                            height:'100vh',
                            maxWidth:'100vw',
                            backdropFilter:'blur(4px)'
                        }}>
                        <div className="modal-dialog">
                            <div className="modal-content"
                                style={{
                                    display:"flex",
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}>
                                <div>
                                    <h5 className="modal-title" style={{color:'green'}}>Yay! Sucessfully Transfered Money</h5>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" onClick={()=>{
                                        window.location.href='/customers'
                                        this.setState({
                                            showPopup:false
                                        })

                                    }} style={{width:'100px'}}>Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>:null}
                </div>
            </div>
        )
    }
}