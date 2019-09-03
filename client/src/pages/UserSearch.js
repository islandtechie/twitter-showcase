import React, { Component, Fragment } from 'react'

class UserSearch extends Component {

    state = {
        searchText: ''
    }

    onChange = e => {
        this.setState({ searchText: e.target.value});
    };

    onClick = () => {
        console.log('goo');
    };

    componentDidMount() {
        document.body.style.backgroundColor = "#fff";
    }

    render() {
        return (
            <Fragment>
                <div className="top-bar">
                    <form onSubmit={this.onSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search a Tweet" 
                            name="user-search"
                            onChange={this.onChange}
                            value={this.state.searchText}
                        />
                        <input type="submit" name="" id="" hidden/>
                    </form>
                </div>
            </Fragment>
        )
    }
}
export default UserSearch;