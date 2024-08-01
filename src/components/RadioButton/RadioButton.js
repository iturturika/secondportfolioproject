import React from 'react';
import './RadioButton.scss';

const RadioButton = ({ text }) => {
  const [onClick, setOnClick] = React.useState(false);

  return (
    <div
      className="radio__button"
      onClick={() => {
        setOnClick(!onClick);
      }}
    >
      <span className="radio__button__border">
        <span
          className="radio__button__circle"
          style={onClick ? { display: 'flex' } : { display: 'none' }}
        />
      </span>
      <p>{text}</p>
    </div>
  );
};

export default RadioButton;
