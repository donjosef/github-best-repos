import React from 'react';

function ListResults(props) {
    const results = props.results.map(result => <li key={result.id}>{result.name}</li>)
    return (
        <ul className="header__list-results">
            {results}
        </ul>
    )
}

export default ListResults;
