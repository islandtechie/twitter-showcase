import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import UserSearch from './pages/UserSearch';
import RandomSearch from './pages/RandomSearch';

class App extends Component {
    state = {

    }

    render() {
        return (
            <Fragment>
                <Router>
                    <nav>
                        <NavLink activeClassName="active" to='/'>Home</NavLink>
                        <NavLink activeClassName="active" to='/user-search'>User Search</NavLink>
                        <NavLink activeClassName="active" to='/random-search'>Random Search</NavLink>
                    </nav>
                    <div className="content">
                        <Route path="/" exact component={Home} />
                        <Route path="/user-search" exact component={UserSearch} />
                        <Route path="/random-search" exact component={RandomSearch} />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

export default App;
