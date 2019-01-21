import React from 'react'
import './LoadingBar.css';

const LoadingBar = (props) => {
  return (
    <div className='bar'>
      <div style={{width: props.percentage + '%'}} className='bar__filler'></div>
    </div>
  )
}

export default LoadingBar;
