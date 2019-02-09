import React from 'react';
import Hit from './Hit/Hit';
import WithPaginate from '../../hoc/WithPaginate/WithPaginate';
import LoadingBar from '../LoadingBar/LoadingBar';

import { getRepos } from '../../api/api';

class Hits extends React.Component {

    state = {
        hits: [],
        pageCount: 0,
        loading: false,
        error: null,
        percentage: 0
    }

    componentDidMount = () => {
        const pathname = this.props.location.pathname;
        const { language, date } = this.props;

        this.setState({ loading: true, percentage: 0 });

        this.interval = setInterval(() => {
          this.setState(prevState => ({
              percentage: prevState.percentage + 10
          }));
        }, 100);

        /* Get repos based on current path */
        if (pathname === '/' || pathname === '/page1') {
            getRepos(language, date)
                .then(data => {
                    clearInterval(this.interval);
                    this.setState({
                        hits: data.hits,
                        pageCount: data.pageCount,
                        percentage: 100,
                        loading: false
                    });
                })
                .catch(err => this.setState({ error: err.message }))
        } else {
            const regEx = /\d+/;
            const currentPage = pathname.match(regEx)[0];
            getRepos(language, date, currentPage)
                .then(data => {
                  clearInterval(this.interval);
                    this.setState({
                        hits: data.hits,
                        pageCount: data.pageCount,
                        percentage: 100,
                        loading: false
                    });
                })
                .catch(err => this.setState({ error: err.message }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        /*Since the path or lang or date changed, get repos for the new page*/
        if (prevProps.location.pathname !== this.props.location.pathname ||
            prevProps.language !== this.props.language ||
            prevProps.date !== this.props.date) {
            let page;
            const regEx = /\d+/;
            const { language, date } = this.props;

            if (this.props.location.pathname === '/') {
                page = 1;
            } else {
                page = this.props.location.pathname.match(regEx)[0]; //extract the number of current page from pathname
            }

            this.setState({ loading: true, percentage: 0 });

            const interval = setInterval(() => {
                this.setState(prevState => ({
                    percentage: prevState.percentage + 10
                }));
            }, 100);

            getRepos(language, date, page)
                .then(data => {
                    clearInterval(interval);
                    this.setState({ hits: data.hits, percentage: 100, loading: false });
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        const hits = this.state.hits.map(hit => {
            /*Remove dummy repo named eeeeee from the results*/
            if (hit.name.includes('eeeeeee')) {
                return null;
            } else {
                return (
                    <Hit
                        key={hit.id}
                        owner={hit.owner.login}
                        name={hit.name}
                        url={hit.html_url}
                        avatar={hit.owner.avatar_url}
                        stars={hit.stargazers_count}
                        language={hit.language}
                        description={hit.description}
                        creationDate={hit.created_at}
                        updateDate={hit.updated_at}
                        type={hit.owner.type} />
                );
            }
        });

        if (!this.state.loading && this.state.percentage >= 100) {
            return (
                <WithPaginate pageCount={this.state.pageCount} router={{
                    history: this.props.history,
                    match: this.props.match,
                    location: this.props.location
                    }}>
                    <ul className='hits'>
                        {hits}
                    </ul>
                </WithPaginate>
            )    
        } else {
            if (!this.state.error) {
                return <LoadingBar percentage={this.state.percentage} />
            } else {
                return <h1>{this.state.error}</h1>
            }
        }
    }
}

export default Hits;
