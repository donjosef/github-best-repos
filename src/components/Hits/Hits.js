import React from 'react';
import Hit from './Hit/Hit';
import FakeHit from './FakeHit/FakeHit';
import FetchData from '../../containers/FetchData/FetchData';
import WithPaginate from '../../hoc/WithPaginate/WithPaginate';

/*
IMPORTANT: 
displayHits is passed as reference to render, and gets invoked by render of FetchData. 
FetchData passes its own state and props (its logic) to this function
This function render jsx (specifically Hits component)
this component is concerned with presentation only
*/
function displayHits(props) {
    let hits;
    if (props.loading) {
        hits = Array(40).fill(null).map((_, index) => <FakeHit key={'hit' + index} />)
    } else {
        hits = props.data.map(hit => {
            /*Remove dummy repo named eeeeee from the results*/
            if (hit.name.includes('eeeeeee')) {
                return null;
            } else {
                return (
                    <Hit
                        key={hit.id}
                        owner={hit.owner.login}
                        name={hit.name}
                        url={hit.html_url}
                        avatar={hit.owner.avatar_url}
                        stars={hit.stargazers_count}
                        language={hit.language}
                        description={hit.description}
                        creationDate={hit.created_at}
                        updateDate={hit.updated_at}
                        type={hit.owner.type} />
                );
            }
        });
    }

    return (
        <WithPaginate
            pageCount={props.pageCount}
            router={{
                history: props.history,
                match: props.match,
                location: props.location
            }}>
            {props.error && <h1>{props.error}</h1>}
            <ul className='hits'>
                {hits}
            </ul>
        </WithPaginate>
    )
}

function Hits(props) {
    //router props are needed by FetchData to handle to logic properly
    const { history, match, location, language, date } = props;
    return (
        <FetchData
            type="repos"
            location={location}
            history={history}
            match={match}
            searchParams={{ language, date }}
            render={displayHits}
        />
    )
}

export default Hits;
