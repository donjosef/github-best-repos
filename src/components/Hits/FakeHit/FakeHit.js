import React from 'react'

function FakeHit(props) {
    return (
        <li className="hit">
            <div className='fake-hit__header'>
                <div className='fake-avatar'></div>
                <div className='fake-title'></div>
                <div className='fake-language'></div>
                <div className='fake-stars'></div>
            </div>

            <div className='fake-hit__body'>
               <div className='fake-type'></div>
               <div className='fake-description'></div>
               <div className='fake-creationDate'></div>
               <div className='fake-updateDate'></div>
            </div>
        </li>
    )
}

export default FakeHit;
