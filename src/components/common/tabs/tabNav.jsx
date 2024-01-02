import React from 'react';
import FtxButton from '../ftxButton/Button';

const TabNav = ({
    children , onClick, isActive, tabLabel, classTitle
}) => {
   const classes = [
    classTitle + '__button',
    isActive ? '_tab-active':'',
    !isActive ? '_empty' :''
   ];

  return (
    <FtxButton onClick={() => onClick(tabLabel)} modif={classes}> {isActive ? <span>{children}</span>: children} </FtxButton>
  );
};

export default TabNav;