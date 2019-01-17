import React, { Component } from 'react';
import Select from './components/Select/Select';
import Hits from './components/Hits/Hits';
import Paginate from 'react-paginate';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { getRepos } from './api/api';
import './App.css';

library.add(faChevronLeft, faChevronRight);


class App extends Component {

  state = {
    hits: [],
    language: 'javascript',
    date: '2011-01-01',
    pageCount: 0
  }

  componentDidMount = () => {
    const { language, date } = this.state;
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
    return (
      <div className="App">
        <header className='header'>
          <h1 className='header__title'>Most popular github repos</h1>
        </header>

        <div className='controls-wrapper'>
          <Select
            className='controls-wrapper__select'
            label='Search'
            optValues={['all', 'javascript', 'java', 'python', 'ruby']} />
          <Select
            className='controls-wrapper__select'
            label='for'
            optValues={['all', 'last 1 year', 'last 5 years']} />
        </div>

        <Hits hits={this.state.hits} />
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
          nextLabel={<FontAwesomeIcon icon='chevron-right'/>}
          activeClassName='active-link'
          />
      </div>
    );
  }
}

export default App;
