import React, { useState } from 'react';
import Button from '@mui/material/Button';

const CTAButton = ({ url, icon, label }) => {
 

  return (
    <Button
      href={url}
      target="_blank"
      variant="outlined"
      endIcon={icon}
      style={{ 
        width: '100%', 
        border: 'none',
        color:'#000',
        backgroundImage: 'linear-gradient(to right, #ffb347 0%, #ffcc33  100%)',
        backgroundSize: '200% auto',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
      }}
      
    >
      {label}
    </Button>
  )
}

export default CTAButton