import React, { Component } from 'react';
import Search from './components/Search/Search';
import Select from './components/Select/Select';
import Hits from './components/Hits/Hits';
import StarWatchers from './components/StarWatchers/StarWatchers';
import ReadMePage from './components/ReadMePage/ReadMePage';

import { getDateOfPastYears } from './utilities/utilities';

import { Route, Switch, Link } from 'react-router-dom';

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
    let controlsWrapper =
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
          value={this.state.dateSelectValue} />
      </div>;

    let homeLink = null;
    const { pathname } = this.props.location;

    if (pathname.includes('/readme') || pathname.includes('/starwatchers')) {
      controlsWrapper = null;
    }

    if (pathname.includes('/readme') || pathname.includes('/starwatchers')) {
      homeLink = <Link className='header__home-link' to='/'>Home</Link>;
    }

    return (
      <div className="App">
        <header className='header'>
          {homeLink}
          <h1 className='header__title'>Most popular github repos</h1>
          <Search />
        </header>

        {controlsWrapper}

        <Switch>
          <Route path='/:owner/:repo/readme' component={ReadMePage} />
          <Route path='/:owner/:repo/starwatchers' component={StarWatchers} />
          <Route path='/' render={(props) => (
            <Hits language={this.state.language} date={this.state.date} {...props} />
          )} />
        </Switch>
        <footer className="footer">Made with love by <a href="https://github.com/donjosef">Giuseppe Montanaro</a></footer>
      </div>
    );
  }
}

export default App;
