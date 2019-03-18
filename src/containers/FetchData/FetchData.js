import { Component } from 'react';
import { getData } from '../../api/api';

/*FetchData is concerned with logic only. 
It makes use of render props to render dinamically whatever it wants
Since Hits and StarWatchers used the same logic, this logic has been abstracted inside this container*/
class FetchData extends Component {

    state = {
        data: [],
        loading: true,
        pageCount: 0,
        error: null,
    }

    componentDidMount() {
        const pathname = this.props.location.pathname;
        /*
        getData for the first page
        getData accepts page as parameter, in this case the default is 1*/
        if (pathname === '/' ||
            pathname === '/page1' ||
            pathname.endsWith('/starwatchers') ||
            pathname.endsWith('/starwatchers/1')) {
            getData(this.props.type, this.props.searchParams)
                .then(res => {
                    this.setState({
                        data: res.data,
                        pageCount: res.pageCount,
                        loading: false
                    })
                })
                .catch(err => this.setState({ error: err.message }))
        } else {
            /*Otherwise getData will be invoked with the currentPage extracted from route parameters*/
            const regEx = /\d+/;
            const currentPage = pathname.match(regEx)[0];
            getData(this.props.type, this.props.searchParams, currentPage)
                .then(res => {
                    this.setState({
                        data: res.data,
                        pageCount: res.pageCount,
                        loading: false
                    });
                })
                .catch(err => this.setState({ error: err.message }))
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.location.pathname !== this.props.location.pathname ||
            prevProps.searchParams.language !== this.props.searchParams.language ||
            prevProps.searchParams.date !== this.props.searchParams.date) {
            let page;
            const regEx = /\d+/;

            if (this.props.location.pathname === '/' ||
                this.props.location.pathname.endsWith('/starwatchers')) {
                page = 1;
            } else {
                page = this.props.location.pathname.match(regEx)[0]; //extract the number of current page from pathname
            }

            this.setState(prevState => ({
                loading: !prevState.loading
            }));

            getData(this.props.type, this.props.searchParams, page)
                .then(res => {
                    this.setState({
                        data: res.data,
                        pageCount: res.pageCount,
                        loading: false
                    })
                })
                .catch(err => this.setState({ error: err.message }))
        }
    }

    render() {
        return (
            this.props.render({
                ...this.state,
                history: this.props.history,
                match: this.props.match,
                location: this.props.location
            })
        )
    }
}

export default FetchData;