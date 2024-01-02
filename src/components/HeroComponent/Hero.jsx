import React from 'react';
import FtxButton from '../common/ftxButton/Button';
const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero__container">
            <div className="hero__content content-hero">
                <h1 className="content-hero__title"> <strong className='marker'>Supercharge</strong>  Your Trading & Investment</h1>
                <FtxButton link={true} modif = {['content-hero__button', 'bold']}>Start Trading</FtxButton>
                <div className="content-hero__review ">
                    <img src='../../../img/hero/review.png' alt="" />
                </div>
            </div>
            <div className="hero__image">
                
                <img src='../../../img/hero/ftx3.png' alt="logo" />
            </div>
        </div>
    </section>
  );
};

export default Hero;