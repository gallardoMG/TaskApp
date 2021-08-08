import React from 'react';

const VisibilityControls = ({ showComplete, description, callback }) => {
  return (
    <div className='form-check container'>
      <label htmlFor='form-check col-12'>Show {description}</label>
      <input
        type='checkbox'
        id='form-check'
        className='form-input col-12'
        checked={showComplete}
        onChange={e => {
          callback(e.target.checked);
          console.log(showComplete);
        }}
      />
    </div>
  );
};

export default VisibilityControls;
