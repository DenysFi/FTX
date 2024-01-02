import React from 'react';

  

const TabItem = ({children}) => {
  return (
    <div className='tabs__item'>
        {children}  
    </div>
  );
};

export default TabItem;