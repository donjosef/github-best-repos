import React, { Component } from 'react';
import Paginate from 'react-paginate';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight);

class WithPaginate extends Component {

    changePageHandler = (data) => {
        //Change navigation behviour based on component being rendered
        const page = data.selected + 1;
        const {props: {className}} = this.props.children; //nested destructuring
        const {history, match} = this.props.router;
        if(className === 'hits') {
            history.push('/page' + page);
        } else if(className === 'watchers') {
            if(match.url[match.url.length - 1] === '/') {
                 history.push(match.url + page);
            } else {
                history.push(match.url + '/' + page);
            }
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.router.location.pathname !== this.props.router.location.pathname) {
            window.scrollTo({top: 0});
        }
    }

    render() {
        const pathname = this.props.router.location.pathname;
            const regex = /\d+/;
            let currentPage;

            if (pathname === '/' || pathname.endsWith('/starwatchers')) {
                currentPage = 1;
            } else {
                currentPage = parseInt(pathname.match(regex)[0], 10);
            }

        return (
            <div>
                {this.props.children}
                <Paginate
                    pageCount={this.props.pageCount}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    onPageChange={this.changePageHandler}
                    disableInitialCallback
                    forcePage={currentPage - 1}
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

export default WithPaginate;
