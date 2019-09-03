import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';

class App extends Component {
    state = {

    }

    render() {
        return (
            <Fragment>
                <Router>
                    <nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/user-search'>User Search</NavLink>
                        <NavLink to='/random-search'>Random Search</NavLink>
                    </nav>
                    <div className="content">
                        <Route path="/" exact component={Home} />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

export default App;
