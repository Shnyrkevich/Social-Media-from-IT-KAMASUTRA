import React from 'react';
import './form-control.css';

export const SomeTextarea = (type) => ({input,
  meta: {
    touched,
    error
  },
  ...props}) => {
  return (
    <div className={`form-control ${touched && error ? 'error' : ''}`}>
      <div>
        {/* <Field {...input} {...props} component={type} /> */}
        <textarea {...input} {...props} component={type} />
      </div>
      {
        touched && error ? 
          <span className="form-control_error">{error}</span> :
          null
      }
    </div>
  );
}

export const Input = ({input,
  meta: {
    touched,
    error
  },
  ...props}) => {

  return (
    <div className={`form-control ${touched && error ? 'error' : ''}`}>
      <div>
        <input {...input} {...props}  />
      </div>
      {
        touched && error ? 
          <span className="form-control_error">{error}</span> :
          null
      }
    </div>
  );
}