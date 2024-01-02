import React from 'react';

const FtxButton = ({modif, children, onClick, link, href}) => {
  let classNames = modif && modif.length ? modif.join(' '): '';
  classNames += ' ftxButton'
  return !link ? (
    <button onClick={onClick} className={classNames}>
        {children}
    </button>
  ): (<a href={href ? href : '#/'} onClick={onClick} className={classNames}>
        {children}
      </a>);
};

export default FtxButton;