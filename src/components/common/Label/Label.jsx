import React from 'react';

const Label = ({children}) => {
  return (
    <div className='label'>
        <div className="label__container">
            <p>{children}</p>
        </div>
    </div>
  );
};

export default Label;