import React, { forwardRef } from 'react';

const BlockHeader = forwardRef(function BlockHeader(props, ref) {
    let classNames = props.modif && props.modif.length ? props.modif.join(' '): '';
    classNames += ' block-header'
    const paragraphs = props.text?.replace(/<p>/g,'').split('</p>');
    paragraphs?.pop();
  return (
    <div ref ={ref} className={classNames}>
        {(props.children || props.titletext) ? <h3 className='block-header__title'>{props.titletext || props.children}</h3>:<></>} 
        {props.text ? <div className='block-header__text'>{
            paragraphs.map((paragraph, i) => (<p key={i}>{paragraph}</p>))
        }</div>: <></>} 
    </div>
    
    
  );
});

export default BlockHeader;