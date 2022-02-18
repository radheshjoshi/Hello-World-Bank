import React from "react";
import { Link } from "react-router-dom";


export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{background:'rgba(0, 0, 0, 0.3)'}}>
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" style={{color:'white', fontWeight:'bold', fontSize:'30px'}}>Hello World Bank</Link>
                    </div>
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link"  to='/customers' style={{color:'white', fontSize:'24px'}}>Customers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/transactions' style={{color:'white', fontSize:'24px'}}>Transactions</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

