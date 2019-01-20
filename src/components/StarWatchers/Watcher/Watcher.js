import React from 'react';

const Watcher = (props) => {
    const { avatar, name} = props;
    return (
        <li className='watcher'>
            <div className='watcher__avatar'>
                <img src={avatar} />
            </div>
            <h3>{name} Test</h3>
        </li>
    )
}
          
export default Watcher;
