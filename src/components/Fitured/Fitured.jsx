import React from 'react';
import BlockHeader from '../common/block-header/BlockHeader';
import FtxSwiper from '../common/swiper/ftxSwiper';

const Fitured = () => {
  return (
    <section className='fitured'>
        <div className="fitured__container">
            <BlockHeader modif={['_bold']} titletext={"As Featured On"}></BlockHeader>
            <div className="fitured__images">
                <a href='##' className="fitured__image">
                    <img src="../../../img/fitured/01.svg" loading='lazy' alt="icon" />
                </a>
                <a href='##' className="fitured__image">
                    <img src="../../../img/fitured/02.svg" loading='lazy' alt="icon" />
                </a>
                <a href='##' className="fitured__image">
                    <img src="../../../img/fitured/03.svg" loading='lazy' alt="icon" />
                </a>
                <a href='##' className="fitured__image">
                    <img src="../../../img/fitured/04.svg" loading='lazy' alt="icon" />
                </a>
                <a href='##' className="fitured__image">
                    <img src="../../../img/fitured/05.svg" loading='lazy' alt="icon" />
                </a>
            </div>
            <div className="fitured__slider">
                <FtxSwiper>
                    <a href='##' className="fitured__image">
                        <img src="../../../img/fitured/01.svg" loading='lazy' alt="icon" />
                    </a>
                    <a href='##' className="fitured__image">
                        <img src="../../../img/fitured/02.svg" loading='lazy' alt="icon" />
                    </a>
                    <a href='##' className="fitured__image">
                        <img src="../../../img/fitured/03.svg" loading='lazy' alt="icon" />
                    </a>
                    <a href='##' className="fitured__image">
                        <img src="../../../img/fitured/04.svg" loading='lazy' alt="icon" />
                    </a>
                    <a href='##' className="fitured__image">
                        <img src="../../../img/fitured/05.svg" loading='lazy' alt="icon" />
                    </a>
                </FtxSwiper>
            </div>
        </div>
    </section>
  );
};

export default Fitured;