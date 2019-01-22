import React, { Component } from 'react';
import Select from './components/Select/Select';
import Hits from './components/Hits/Hits';
import StarWatchers from './components/StarWatchers/StarWatchers';

import { getDateOfPastYears } from './utilities/utilities';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {

  state = {
    language: 'javascript',
    date: '2011-01-01',
    dateSelectValue: 'all'
  }

  changeLanguageHandler = (e) => {
    this.setState({ language: e.target.value });
  }

  changeDateHandler = (e) => {
    this.setState({ dateSelectValue: e.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dateSelectValue !== this.state.dateSelectValue) {
      switch (this.state.dateSelectValue) {
        case 'all':
          this.setState({ date: '2011-01-01' });
          break;
        case 'last 5 years':
          this.setState({
            date: getDateOfPastYears(5)
          });
          break;
        case 'last year':
          this.setState({
            date: getDateOfPastYears(1)
          });
          break;
      }
    }
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
            optValues={['all', 'last year', 'last 5 years']}
            onSelect={this.changeDateHandler}
            value={this.dateSelectValue} />
        </div>

        <BrowserRouter>
          <Switch>
            <Route path='/:owner/:repo/starwatchers' component={StarWatchers} />
            <Route path='/' render={(props) => (
              <Hits language={this.state.language} date={this.state.date} {...props} />
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
