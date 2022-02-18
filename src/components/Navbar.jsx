import React from "react";
import { Link } from "react-router-dom";


export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-capitalize text-info fs-3" to="/">Hello World Bank</Link>
                    <button className="navbar-toggler border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className="nav-link active text-info fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link text-info fs-5" to="/customers">Customers</Link>
                            </li>
                            <li>
                                <Link className="nav-link text-info fs-5" to='/transactions'>Transactions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

