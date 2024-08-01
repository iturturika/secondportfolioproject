import React from 'react';
import './Service.scss';
import green_arrow from '../../images/arrow_icon.svg';
import dark_arrow from '../../images/dark_arrow.svg';

const Service = ({ color, img, title }) => {
  return (
    <div
      className="service"
      style={
        color === 'gray'
          ? { backgroundColor: '#F3F3F3' } //gray
          : color === 'dark'
          ? { backgroundColor: '#191A23' } //dark
          : color === 'green'
          ? { backgroundColor: '#B9FF66' } //green
          : { backgroundColor: '#F3F3F3' } //gray
      }
    >
      <div className="service__text">
        <h3
          style={
            color === 'gray'
              ? { backgroundColor: '#B9FF66' } //green
              : color === 'dark'
              ? { backgroundColor: '#F3F3F3' } //gray
              : color === 'green'
              ? { backgroundColor: '#191A23', color: '#F3F3F3' } //dark
              : { backgroundColor: '#B9FF66' }
          }
        >
          {title}
        </h3>
        <div className="service__button">
          <span
            style={
              color === 'gray'
                ? { backgroundColor: '#191A23' } //dark
                : color === 'dark'
                ? { backgroundColor: '#F3F3F3' } //gray
                : color === 'green'
                ? { backgroundColor: '#191A23' } //dark
                : { backgroundColor: '#191A23' }
            }
          >
            <img
              src={
                color === 'gray' || color === 'green'
                  ? green_arrow
                  : color === 'dark'
                  ? dark_arrow
                  : green_arrow
              }
              alt="green_arrow"
            />
          </span>
          <h4
            style={
              color === 'gray'
                ? { color: '#191A23' } //dark
                : color === 'dark'
                ? { color: '#F3F3F3' } //gray
                : color === 'green'
                ? { color: '#191A23' } //dark
                : { color: '#191A23' }
            }
          >
            Learn more
          </h4>
        </div>
      </div>
      <img src={img} alt="illustration" className="service__img" />
    </div>
  );
};

export default Service;
