import React from 'react';
import BlockHeader from '../common/block-header/BlockHeader';

const Trade = () => {
  return (
    <section className='trade'>
        <div className="trade__container">
            <BlockHeader modif={['_bold']} titletext={'Why Trade with FXTRADING.com?'}></BlockHeader>
            <div className="trade__content">
                <div className="trade__cards">
                    <article className="trade__card card-trade">
                        <div className="card-trade__image">
                            <img src="../../../FTX/img/Trade/01.jpg" loading='lazy' alt=""/>
                        </div>
                        <h4 className="card-trade__title">Multi-Asset Platform</h4>
                        <p className="card-trade__text">Stocks, Crypto, Forex, Commodities and more</p>
                    </article>
                    <article className="trade__card card-trade">
                        <div className="card-trade__image">
                            <img src="../../../FTX/img/Trade/02.jpg" loading='lazy' alt=""/>
                        </div>
                        <h4 className="card-trade__title">Industrial Leading Trading Environment</h4>
                        <p className="card-trade__text">Spreads starting from 0.0 pips</p>
                    </article>
                    <article className="trade__card card-trade">
                        <div className="card-trade__image">
                            <img src="../../../FTX/img/Trade/03.jpg" loading='lazy' alt=""/>
                        </div>
                        <h4 className="card-trade__title">Incubation Program</h4>
                        <p className="card-trade__text">Designated professional career path for gifted traders</p>
                    </article>
                    <article className="trade__card card-trade">
                        <div className="card-trade__image">
                            <img src="../../../FTX/img/Trade/04.jpg" loading='lazy' alt=""/>
                        </div>
                        <h4 className="card-trade__title">Investing with Pros</h4>
                        <p className="card-trade__text">Copy trade top performing funds managers worldwide</p>
                    </article>
                    <article className="trade__card card-trade">
                        <div className="card-trade__image">
                            <img src="../../../FTX/img/Trade/05.jpg" loading='lazy' alt=""/>
                        </div>
                        <h4 className="card-trade__title">Advanced Trading Tools</h4>
                        <p className="card-trade__text">In-house built trading tools available to FXT clients</p>
                    </article>
                    <article className="trade__card card-trade">
                        <div className="card-trade__image">
                            <img src="../../../FTX/img/Trade/06.jpg" loading='lazy' alt=""/>
                        </div>
                        <h4 className="card-trade__title">Globally Licensed Brokerage</h4>
                        <p className="card-trade__text">Multi-licenses available to cater your needs</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Trade;