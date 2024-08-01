import React from 'react';
import './FormInput.scss';

const FormInput = ({ label, placeholder, height }) => {
  return (
    <div className="form__input">
      <label>{label}</label>
      <textarea placeholder={placeholder} style={height ? { height: height } : null} />
    </div>
  );
};

export default FormInput;
