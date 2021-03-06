import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import image from './images/background_page.png'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <section className='container'>
                    <div className='row'>
                        <div className='col-md-6  col-10 my-auto mx-md-none mx-auto'>
                            <h1>
                                Welcome to<br/> Hello World Bank
                            </h1>
                            <p className='lead text-muted'>
                                Hello to the World.
                            </p>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Link to='/customers' className='btn btn-info btn-lg text-uppercase shadow' >Customers</Link>
                                {/* <Link to='/transactions' className='btn btn-outline-info btn-lg text-uppercase shadow'>Transactions</Link> */}
                            </div>
                        </div>
                        <div className='col-md-6 col-10 my-auto mx-md-none mx-auto overflow-hidden'>
                            <img src={image} alt="helloworld" className='w-100' />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}