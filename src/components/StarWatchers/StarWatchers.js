import React, { Component } from 'react';
import Watcher from './Watcher/Watcher';

import Paginate from 'react-paginate';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import './StarWatchers.css';
import { getWatchers } from '../../api/api';

library.add(faChevronLeft, faChevronRight);

class StarWatchers extends Component {
    state = {
        watchers: [],
        pageCount: 0
    }

    componentDidMount() {
        const { owner, repo } = this.props.match.params;
        getWatchers(owner, repo)
            .then(data => {
                this.setState({ 
                    watchers: data.watchers,
                    pageCount: data.pageCount
                 });
            })
    }
    render() {
        const watchers = this.state.watchers.map(watcher => {
            return <Watcher 
                        key={watcher.id} 
                        avatar={watcher.avatar_url} 
                        name={watcher.login}
                        url={watcher.html_url} />
        });

        return (
            <div>
                <ul className='watchers'>
                    {watchers}
                </ul>

                <Paginate
                        pageCount={this.state.pageCount}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        disableInitialCallback
                        containerClassName='paginate-wrapper'
                        pageLinkClassName='paginate-link'
                        pageClassName='paginate-li'
                        previousClassName='paginate-li'
                        nextClassName='paginate-li'
                        previousLabel={<FontAwesomeIcon icon='chevron-left' />}
                        nextLabel={<FontAwesomeIcon icon='chevron-right' />}
                        activeClassName='active-link'
                    />
            </div>
        )
    }
}

export default StarWatchers;
