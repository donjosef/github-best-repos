import React from 'react';
import Watcher from './Watcher/Watcher';
import FetchData from '../../containers/FetchData/FetchData';
import WithPaginate from '../../hoc/WithPaginate/WithPaginate';
import './StarWatchers.css';

/*
IMPORTANT: 
displayWatchers gets invoked by render of FetchData. 
FetchData passes its own state and props (its logic) to this function
This function render jsx (specifically StarWatchers component)
this component is concerned with presentation only just like Hits
*/
function displayWatchers(props) {
    const watchers = props.data.map(watcher => {
        return <Watcher
            key={watcher.id}
            avatar={watcher.avatar_url}
            name={watcher.login}
            url={watcher.html_url} />
    });

    if (props.error) {
        return <h1 style={{ paddingTop: 170 }}>{props.error}</h1>
    } else {
        return (
            <WithPaginate
                pageCount={props.pageCount}
                router={{
                    history: props.history,
                    match: props.match,
                    location: props.location
                }}>
                <ul className='watchers'>{watchers}</ul>
            </WithPaginate>
        )
    }
}

function StarWatchers(props) {
    const { history, match, location } = props;

    return (
        <FetchData
            type="starwatchers"
            location={location}
            history={history}
            match={match}
            searchParams={{ owner: match.params.owner, repo: match.params.repo }}
            render={displayWatchers}
        />
    )
}

export default StarWatchers;
