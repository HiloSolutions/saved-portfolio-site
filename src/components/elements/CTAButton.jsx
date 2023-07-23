import React from 'react';
import "../../styles/CTAButton.css";

const CTAButton = ({ url, icon, label }) => {
  const handleButtonClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleButtonClick}
      className="cta-button"
    >
      {label} {icon}
      <div className="hover-effect" />
    </button>
  );
};

export default CTAButton;
