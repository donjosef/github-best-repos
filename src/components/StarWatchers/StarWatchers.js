import React, { Component } from 'react';
import Watcher from './Watcher/Watcher';
import './StarWatchers.css';

class StarWatchers extends Component {
    state = {
        watchers: []
    }

    render() {
        const watchers = this.state.watchers.map(watcher => <Watcher avatar={watcher.avatar_url} name={watcher.login}/>);
        return (
            <div>
                <ul className='watchers'>
                    {watchers}
                </ul>
            </div>
        )
    }
}

export default StarWatchers;
