import React from 'react';
import './stripes.css';
import '../Animation/animation.css';

function Stripes({ handleStripesClick, isStripesMenuOpened }) {
  return (
    <div onClick={handleStripesClick} className={`stripes animation__button ${isStripesMenuOpened? "stripes_fixed" : ""}`}>
      <span /><span /><span />
    </div>
  );
}

export default Stripes;