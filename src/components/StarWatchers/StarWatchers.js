import React, { Component } from 'react';
import Watcher from './Watcher/Watcher';
import './StarWatchers.css';
import { getWatchers } from '../../api/api';

class StarWatchers extends Component {
    state = {
        watchers: []
    }

    componentDidMount() {
        const { owner, repo } = this.props.match.params;
        getWatchers(owner, repo)
            .then(data => {
                this.setState({ watchers: data.watchers })
            })
    }
    render() {
        const watchers = this.state.watchers.map(watcher => {
            return <Watcher 
                        key={watcher.id} 
                        avatar={watcher.avatar_url} 
                        name={watcher.login}
                        url={watcher.html_url} />
        });

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
