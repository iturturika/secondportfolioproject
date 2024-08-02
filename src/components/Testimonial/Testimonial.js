import React from 'react';
import './Testimonial.scss';
import msg_icon from '../../images/msg.svg';
const Testimonial = ({ text, name, role }) => {
  return (
    <div className="testimonial">
      <div className="testimonial__text">
        <img src={msg_icon} alt="msg_icon" />
        <p>{text}</p>
      </div>
      <h4>
        <span>{name}</span>
        {role}
      </h4>
    </div>
  );
};

export default Testimonial;
