import React from 'react';
import './Guide.scss';
import minus_icon from '../../images/minus.svg';
import plus_icon from '../../images/plus.svg';

const Guide = ({ number, heading, description }) => {
  const [onClick, setOnClick] = React.useState(false);
  return (
    <div className="guide" style={onClick ? { backgroundColor: '#B9FF66' } : null}>
      <div className="guide__heading">
        <span className="guide__number">{number}</span>
        <h3>{heading}</h3>
        <div
          className="guide__button"
          onClick={() => {
            setOnClick(!onClick);
          }}
        >
          <img src={onClick ? minus_icon : plus_icon} alt="+" />
        </div>
      </div>
      <span
        className="guide__separator"
        style={onClick ? { display: 'flex' } : { display: 'none' }}
      />
      <p style={onClick ? { display: 'flex' } : { display: 'none' }}>{description}</p>
    </div>
  );
};

export default Guide;
