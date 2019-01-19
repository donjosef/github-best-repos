import React from 'react';
import Hit from './Hit/Hit';
import Paginate from 'react-paginate';

import { getRepos } from '../../api/api';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight);

class Hits extends React.Component {

    state = {
        hits: [],
        currentPage: 1,
        pageCount: 0
    }

    componentDidMount = () => {
        const { language, date } = this.props;
        getRepos(language, date)
            .then(data => {
                this.setState({
                    hits: data.hits,
                    pageCount: data.pageCount
                });
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        /*Since the path changed, get repos for the new page*/
        if (prevProps.location.pathname !== this.props.location.pathname) {
            let page;
            const regEx = /\d+/;
            const { language, date } = this.props;

            if(this.props.location.pathname === '/') {
                page = 1;
            } else {
                page = this.props.location.pathname.match(regEx)[0]; //extract the number of current page from pathname
            }
            
            getRepos(language, date, page)
                .then(data => {
                    this.setState({ hits: data.hits });
                })
                .catch(err => console.log(err))
        }
    }

    changePageHandler = (data) => {
        const page = data.selected + 1; //data.selected is 0 based
        this.props.history.push('/page' + page); //navigate programmatically through pages, changing the path
    }

    render() {
        const { hits } = this.state;
        return (
            <div>
                <ul className='hits'>
                    {hits.map(hit => (
                        <Hit
                            key={hit.id}
                            name={hit.name}
                            url={hit.html_url}
                            avatar={hit.owner.avatar_url}
                            stars={hit.stargazers_count}
                            language={hit.language}
                            description={hit.description}
                            creationDate={hit.created_at}
                            updateDate={hit.updated_at}
                            type={hit.owner.type} />
                    ))}
                </ul>

                <Paginate
                    pageCount={this.state.pageCount}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    onPageChange={this.changePageHandler}
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
        );
    }
}

export default Hits;
