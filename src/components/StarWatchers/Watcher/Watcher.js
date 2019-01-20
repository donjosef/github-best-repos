import React from 'react';

const Watcher = (props) => {
    const { avatar, name, url} = props;
    return (
        <li className='watcher'>
            <div className='watcher__avatar'>
                <img src={avatar} />
            </div>
            <h3><a href={url} >{name}</a></h3>
        </li>
    )
}
          
export default Watcher;
