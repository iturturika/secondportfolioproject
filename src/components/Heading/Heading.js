import React from 'react';
import './Heading.scss';

const Heading = ({ title, description }) => {
  return (
    <div className="heading">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
