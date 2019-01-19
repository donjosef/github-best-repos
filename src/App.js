import React, { Component } from 'react';
import Select from './components/Select/Select';
import Hits from './components/Hits/Hits';

import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {

  state = {
    language: 'javascript',
    date: '2011-01-01',
  }

  changeLanguageHandler = (e) => {
    this.setState({ language: e.target.value });
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
            optValues={['all', 'javascript', 'java', 'python', 'ruby']}
            onSelect={this.changeLanguageHandler}
            value={this.state.language} />
          <Select
            className='controls-wrapper__select'
            label='for'
            optValues={['all', 'last 1 year', 'last 5 years']} />
        </div>

        <Route path='/' render={(props) => (
          <Hits language={this.state.language} date={this.state.date} {...props} />
        )} />

      </div>
    );
  }
}

export default App;
