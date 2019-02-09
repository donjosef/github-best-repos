import React, { Component } from 'react';
import Watcher from './Watcher/Watcher';

import WithPaginate from '../../hoc/WithPaginate/WithPaginate';
import './StarWatchers.css';
import { getWatchers } from '../../api/api';

class StarWatchers extends Component {
    state = {
        watchers: [],
        pageCount: 0,
        error: null
    }

    componentDidMount() {
        const { owner, repo } = this.props.match.params;
        const pathname = this.props.location.pathname;
        if (pathname.endsWith('/starwatchers') || pathname.endsWith('/starwatchers/1')) {
            getWatchers(owner, repo)
                .then(data => {
                    this.setState({
                        watchers: data.watchers,
                        pageCount: data.pageCount
                    });
                })
                .catch(err => this.setState({ error: err.message }))
        } else {
            const regEx = /\d+/;
            const currentPage = pathname.match(regEx)[0];

            getWatchers(owner, repo, currentPage)
                .then(data => {
                    this.setState({
                        watchers: data.watchers,
                        pageCount: data.pageCount
                    });
                })
                .catch(err => this.setState({ error: err.message }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            let page;
            const regEx = /\d+/;
            const { owner, repo } = this.props.match.params;

            if (!this.props.location.pathname.match(regEx)) {
                page = 1;
            } else {
                page = this.props.location.pathname.match(regEx)[0]; //extract the number of current page from pathname
            }

            getWatchers(owner, repo, page)
                .then(data => {
                    this.setState({ watchers: data.watchers });
                })

        }
    }

    render() {
        const watchers = this.state.watchers.map(watcher => {
            return <Watcher
                key={watcher.id}
                avatar={watcher.avatar_url}
                name={watcher.login}
                url={watcher.html_url} />
        });

        let output =
            <WithPaginate
                pageCount={this.state.pageCount}
                router={{
                    history: this.props.history,
                    match: this.props.match,
                    location: this.props.location
                }}>
                <ul className='watchers'>{watchers}</ul>
            </WithPaginate>

        if (this.state.error) {
            output = <h1>{this.state.error}</h1>
        }

        return output;
    }
}

export default StarWatchers;
