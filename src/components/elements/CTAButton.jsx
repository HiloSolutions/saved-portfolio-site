import React from 'react';

const CTAButton = ({ url, icon, label }) => {

  const handleButtonClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleButtonClick}  // Use onClick instead of onclick
      style={{
        background: 'transparent',
        padding: '1rem 1rem',
        width: '30%',
        margin: '5rem 35% 0 35%',
        transition: 'all .5s ease',
        color: '#41403E',
        fontSize: '18px',
        letterSpacing: '1px',
        outline: 'none',
        boxShadow: '20px 38px 34px -26px hsla(0, 0%, 0%, .2)',
        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
        border: 'solid 2px #41403E',
        cursor: 'pointer'
      }}
    >
      {label} {icon}
    </button>
  );
};

export default CTAButton;
