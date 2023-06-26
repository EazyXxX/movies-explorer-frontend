import React from 'react';
import './stripes.css';

function Stripes({ handleStripesClick, isStripesMenuOpened }) {
  return (
    <button type='button' onClick={handleStripesClick} className={`stripes ${isStripesMenuOpened? "stripes_fixed" : ""}`}>
      <span className='stripes__span' /><span className='stripes__span'/><span className='stripes__span'/>
    </button>
  );
}

export default Stripes;