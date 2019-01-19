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
