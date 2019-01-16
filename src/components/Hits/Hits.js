import React from 'react';
import Hit from './Hit/Hit';

const Hits = (props) => {
    const { hits } = props;
  return (
    <ul className='hits'>
       {hits.map(hit => <Hit key={hit.id}/>)} 
    </ul>
  )
}

export default Hits;
