import React from 'react';

import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

const Hit = (props) => {
    const { name, url, avatar, stars, language, description, creationDate, updateDate, type, owner } = props;
    return (
        <li className='hit'>
            <div className='hit__header'>
                <div className='hit__avatar'>
                    <img src={avatar} alt={name}/>
                </div>
                <h2 className='hit__title'><a href={url}>{name}</a></h2>
                <div className='hit__language'>
                    <p>{language}</p>
                </div>
                <Link className='hit__stars' to={'/' + owner + '/' + name + '/starwatchers'}>
                    <FontAwesomeIcon icon="star" size='xs' color='#FBBC05' />
                    <p>{stars}</p>
                </Link>
            </div>

            <div className='hit__body'>
            <h3>{type}</h3>
                <p>{description}</p>
                <p>Created at: {creationDate.substr(0, 10)}</p>
                <p>Last update: {updateDate.substr(0, 10)}</p>            
            </div>
        </li>
    )
}

export default Hit;
