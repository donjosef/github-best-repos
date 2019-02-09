import React, { Component } from 'react'

class Search extends Component {
    state = {
        query: "",
        results: []
    }

    changeQuery = (e) => {
        this.setState({ query: e.target.value })
    }

    render() {
        return (
            <div className="header__search">
                <input
                    type="search"
                    placeholder="Search your favorite repository"
                    value={this.state.query}
                    onChange={this.changeQuery} />
            </div>
        )
    }
}

export default Search;
