import React from 'react';
import LogosList from './logosList.jsx'
const Partners = () => {
  return (
    <section className='partners'>
        <div className="partners__content">
            <h3 className="partners__title">We put our traders first</h3>
            <div className="partners__text">
                <p>
                Take advantage of the competitive trading costs beating 80% of the competition, all the time FXTrading.com offers top-shelf industry trading conditions, designed for your thading success
                </p>
            </div>
        </div>
        <LogosList  />
    </section>
  );
};

export default Partners;