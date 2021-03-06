import React from 'react';
import { Link } from 'react-router-dom';

function ListResults(props) {
    const {onClickLink} = props;
    const results = props.results.map(result => (
        <Link
            to={'/' + result.owner.login + '/' + result.name + '/readme'}
            key={result.id}>
            <li>{result.name}</li>
        </Link>
    ));
    return (
        <ul onClick={onClickLink} className="header__list-results">
            {results}
        </ul>
    )
}

export default ListResults;
