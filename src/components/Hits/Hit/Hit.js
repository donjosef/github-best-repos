import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

const Hit = (props) => {
    const { name, url, avatar, stars, language,  } = props;
    return (
        <li className='hit'>
            <div className='hit__header'>
                <div className='hit__avatar'>
                    <img src={avatar} />
                </div>
                <h2 className='hit__title'><a href={url}>{name}</a></h2>
                <div className='hit__language'>
                    <p>{language}</p>
                </div>
                <div className='hit__stars'>
                    <FontAwesomeIcon icon="star" size='xs' color='#FBBC05' />
                    <p>{stars}</p>
                </div>
            </div>
        </li>
    )
}

export default Hit;
