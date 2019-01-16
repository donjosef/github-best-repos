import React, { Component } from 'react';
import Select from './components/Select/Select';
import './App.css';

class App extends Component {
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
            optValues={['all', 'javascript', 'java', 'python', 'ruby']}/>
          <Select 
            className='controls-wrapper__select'
            label='for' 
            optValues={['all', 'last 1 year', 'last 5 years']}/>
        </div>
      </div>
    );
  }
}

export default App;
