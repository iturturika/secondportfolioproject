import React from 'react';
import './Testimonial.scss';
import msg_icon from '../../images/msg.svg';
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__text">
        <img src={msg_icon} alt="msg_icon" />
        <p>
          "We have been working with Positivus for the past year and have seen a significant
          increase in website traffic and leads as a result of their efforts. The team is
          professional, responsive, and truly cares about the success of our business. We highly
          recommend Positivus to any company looking to grow their online presence."
        </p>
      </div>
      <h4>
        <span>John Smith</span>
        Marketing Director at XYZ Corp
      </h4>
    </div>
  );
};

export default Testimonial;
