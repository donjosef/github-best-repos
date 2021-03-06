import React, { Component } from 'react';
import ListResults from './ListResults/ListResults';
import { getReposDynamically } from '../../api/api';
class Search extends Component {
    state = {
        query: "",
        results: []
    }

    changeQuery = (e) => {
        this.setState({ query: e.target.value })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query && this.state.query) {
            const { query } = this.state;
            getReposDynamically(query)
                .then(data => {
                    this.setState({ results: data.results })
                })
        }

        if (prevState.query !== this.state.query && !this.state.query) {
            this.removeResults();
        }

    }

    removeResults = () => {
        this.setState({ 
            results: [],
            query: ""
         });
    }

    render() {
        return (
            <div className="header__search">
                <input
                    type="search"
                    placeholder="Search readmes..."
                    value={this.state.query}
                    onChange={this.changeQuery}
                   />
                <ListResults results={this.state.results} onClickLink={this.removeResults}/>
            </div>
        )
    }
}

export default Search;
