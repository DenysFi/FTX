import React from 'react';
import BlockHeader from '../common/block-header/BlockHeader';
import FtxButton from '../common/ftxButton/Button';

const GetSelected = () => {
  
  return (
    <section className='get-selected'>
        <div className="get-selected__container">
            <BlockHeader  modif={['_bold']} titletext={'How to Get Selected'}></BlockHeader>
            <div className="get-selected__main">
                <div className="get-selected__image">
                    <img src="../../../FTX/img/GetSelected/star.png" loading='lazy' alt="star"/>
                </div>
                <div className="get-selected__content">
                    <h4 className="get-selected__title">Are you a serious trader? </h4>
                    <p className="get-selected__text">Pursue a fulltime career as a trader. FXT has the roadmap ready all types of talent.  </p>
                </div>
            </div>
            <div className="get-selected__advantages advantages-selected">
                <div className="advantages-selected__cards">
                    <article className="advantages-selected__card">
                        <h3 className="advantages-selected__title">Incubator</h3>
                        <ul className="advantages-selected__list">
                            <li className="advantages-selected__item">6 month track record, 2+ Sharpe Ratio</li>
                            <li className="advantages-selected__item">min $5k, up to $750k / 75:1 capital available, no fees</li>
                            <li className="advantages-selected__item">see incubation program application process <a href="##">[link]</a></li>
                        </ul>
                        <FtxButton modif={['_transperent','_border', 'advantages-selected__link']} link={true}>Learn more</FtxButton>
                    </article>
                    <article className="advantages-selected__card">
                        <h3 className="advantages-selected__title">Pro Select</h3>
                        <ul className="advantages-selected__list">
                            <li className="advantages-selected__item">2yr track record, 1+ Sharpe Ratio, $2m AUM</li>
                            <li className="advantages-selected__item">$100-500k instant allocation, 20% performance fees</li>
                            <li className="advantages-selected__item">see Pro Select application process <a href="##">[link]</a></li>
                        </ul>
                        <FtxButton modif={['_transperent','_border', 'advantages-selected__link']} link={true}>Learn more</FtxButton>
                    </article>
                </div>
            </div>
        </div>
    </section>
  );
};

export default GetSelected;