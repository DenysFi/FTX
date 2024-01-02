import React, { useRef } from 'react';
import BlockHeader from '../common/block-header/BlockHeader';
import useMediaChange from '../../hooks/useMediaChange';

const Investing = () => {
    const imgRef = useRef(null);
    const isMoveble = useMediaChange(imgRef.current,'991');

  return (
    <section className='investing'>
        <div className="investing__container">
            <BlockHeader modif={['_bold']} titletext={"Investing made easy"}></BlockHeader>
            <div className="investing__main main-investing">
                <div className="main-investing__content">
                    <h4 className="main-investing__title">When They Trade, You Copy</h4>
                    {
                        isMoveble && (
                            <div ref={imgRef} className="main-investing__image">
                                <img src="../../../FTX/img/investing/bg.jpg" alt="main-bg" loading='lazy'/>
                            </div>
                        )
                    }
                    <div className="main-investing__text">
                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and</p>
                    </div>
                    <div className="main-investing__labels">
                        <div className="main-investing__label label-main-investing">
                            <div className="label-main-investing__icon">
                                <img src="../../../FTX/img/investing/01.svg" alt="icon" loading='lazy'/>
                            </div>
                            <div className="label-main-investing__text">
                                <p>
                                    <span>Copy</span> traders who trade Real Stocks, Forex, CFDs & more
                                </p>
                            </div>
                        </div>
                        <div className="main-investing__label label-main-investing">
                            <div className="label-main-investing__icon">
                                <img src="../../../FTX/img/investing/02.svg" alt="icon" loading='lazy'/>
                            </div>
                            <div className="label-main-investing__text">
                                <p>
                                    <span>Transparent</span>  trading fees.Completely free account
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    !isMoveble && (
                        <div ref={imgRef} className="main-investing__image">
                            <img src="../../../FTX/img/investing/bg.jpg" loading='lazy' alt="background"/>
                        </div>
                    )
                }
            </div>
            <div className="investing__introduction introduction-investing">
                <ul className="introduction-investing__items">
                    <li className='introduction-investing__item'>
                        <div className="introduction-investing__image">
                            <img src="../../../FTX/img/investing/man.png" loading='lazy' alt="man"/>
                        </div>
                        <div className="introduction-investing__content">
                            <div className="introduction-investing__number">1</div>
                            <h5 className="introduction-investing__title">Choose your favourite trader from the Leaderboard</h5>
                            <div className="introduction-investing__text"><p>Check out the Leaderboard, search by performance, assets, percentage of the win rate and more. Find the one for you and press Autocopy.</p></div>
                        </div>
                    </li>
                    <li className='introduction-investing__item'>
                        <div className="introduction-investing__image">
                            <img src="../../../FTX/img/investing/counter.png" alt="counter" loading='lazy'/>
                        </div>
                        <div className="introduction-investing__content">
                            <div className="introduction-investing__number">2</div>
                            <h5 className="introduction-investing__title">Choose the investment amount</h5>
                            <div className="introduction-investing__text"><p>Choose how you want to copy a trader with a percentage or with a fixed amount per trade.</p></div>
                        </div>
                    </li>
                    <li className='introduction-investing__item'>
                        <div className="introduction-investing__image">
                            <img src="../../../FTX/img/investing/chair.png" loading='lazy' alt="chair"/>
                        </div>
                        <div className="introduction-investing__content">
                            <div className="introduction-investing__number">3</div>
                            <h5 className="introduction-investing__title">Start Copying</h5>
                            <div className="introduction-investing__text"><p>After you confirmed your Autocopy settings️, the algorithm will automatically mirror any eligible trade opened by the Lead Trader.</p></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  );
};

export default Investing;