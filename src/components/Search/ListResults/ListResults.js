import React from 'react';
import { Link } from 'react-router-dom';

function ListResults(props) {
    const {onLinkClick} = props;
    const results = props.results.map(result => (
        <Link
            to={'/' + result.owner.login + '/' + result.name + '/readme'}
            key={result.id}>
            <li onClick={onLinkClick}>{result.name}</li>
        </Link>
    ));
    return (
        <ul className="header__list-results">
            {results}
        </ul>
    )
}

export default ListResults;
