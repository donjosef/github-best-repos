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

    changePageHandler = (data) => {
        const page = data.selected + 1; //data.selected is 0 based
        /* If last character is forw slash. Avoid a bad formatted url with two // */
        if(this.props.match.url[this.props.match.url.length - 1] === '/') {
            console.log(this.props.match.url)
            this.props.history.push(this.props.match.url + page);
        } else {
            this.props.history.push(this.props.match.url + '/' + page); //will be root/owner/repo/starwatchers/1 or 4 or n
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

        return (
            <div>
                <ul className='watchers'>
                    {watchers}
                </ul>

                <Paginate
                    pageCount={this.state.pageCount}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    onPageChange={this.changePageHandler}
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
