import React from 'react';
import Hit from './Hit/Hit';

const Hits = (props) => {
    const { hits } = props;
    return (
        <ul className='hits'>
            {hits.map(hit => (
                <Hit 
                    key={hit.id}
                    name={hit.name}
                    url={hit.html_url}
                    avatar={hit.owner.avatar_url}
                    stars={hit.stargazers_count}
                    language={hit.language}
                     />
            ))}
        </ul>
    );
}

export default Hits;
