import React from 'react';
import '../../styles/SectionStart.css';

function SectionStart({ color }) {
  
  const boxStyle = {
    borderBottom: `4px solid ${color}` 
  }

  const arrowStyle = {
    borderTop: `18px solid ${color}` 
  }
  
  return (
    <div
      className="box"
      style={boxStyle}
    >
      <div
        className="arrow-down"
        style={arrowStyle}
      ></div>
    </div>

  );
}

export default SectionStart;