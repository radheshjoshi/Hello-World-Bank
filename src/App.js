import React from 'react'
import Customers from './components/customers'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Transactions from './components/transactions'
import Home from './components/Home'

function App(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/transactions" element={<Transactions/>}/>
            </Routes>
        </Router>
    )
}

export default App;