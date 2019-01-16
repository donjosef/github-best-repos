import React, { Component } from 'react';
import Select from './components/Select/Select';
import Hits from './components/Hits/Hits';

import { getRepos } from './api/api';
import './App.css';

class App extends Component {

  state = {
    hits: [],
    language: 'javascript',
    date: '2011-01-01'
  }

  componentDidMount = () => {
    const { language, date } = this.state;
    getRepos(language, date)
      .then(data => {
        this.setState({ hits: data.hits })
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

        <Hits hits={this.state.hits}/>

      </div>
    );
  }
}

export default App;
