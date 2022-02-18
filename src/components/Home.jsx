import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import image from './images/background_page.jpg'

export default class Home extends React.Component{
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
                <div style={{
                    display:'flex',
                    justifyContent:'space-around',
                    alignItems:'center',
                    height:'79%'
                }}>
                </div>
            </div>
        )
    }
}