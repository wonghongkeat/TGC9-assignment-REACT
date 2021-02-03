import React from 'react'
import Menu from "./Menu"
import Login from "./Login"
import Frontpage from "./Frontpage"
import CreateProduct from "./createProduct"
import 'bootstrap/dist/css/bootstrap.min.css';
import './frontPage.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">Suck eat</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" >

                        <li className="nav-item active">
                            <Link to="/Frontpage">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu">menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">createUser</Link>
                        </li>
                           <li className="nav-item">
                            <Link to="/createProduct">createProduct</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/menu">
                    <Menu />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/Frontpage">
                    <Frontpage />
                </Route>
                <Route exact path='/createProduct'>
                    <CreateProduct/>
                </Route>
            </Switch>
        </Router>
    )


}

export default App;