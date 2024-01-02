import React, { useEffect, useRef } from 'react';
import Spoillers from '../../CustomClasses/Accordion';
import useMediaChange from '../../hooks/useMediaChange';

const Footer = () => {
    const blockWidtSpollers = useRef(null);

    function initSpolers(){
        const node = blockWidtSpollers.current;
        let spoilers;
        if(blockWidtSpollers.current !== null){
           spoilers =  new Spoillers(node, 'max');
        }
     
        // return () => {spoilers.destroy();spoilers = null };
    }
    useEffect(initSpolers, []);
    const downloadRef = useRef(null);
    const isDownloadMoveble = useMediaChange(downloadRef.current, 767);
    const ytbRef = useRef(null);
    const isYtbShoweble = useMediaChange(ytbRef.current, 767);
    const linkBtnRef = useRef(null);
    const isLinkBtnShoweble = useMediaChange(linkBtnRef.current, 767);
  return (
    <footer className='footer'>
        <div className="footer__container">
            <nav className="footer__navigation">
                <ul data-mediaquery='767' ref={blockWidtSpollers} className="footer__row">
                    <li className="footer__column">
                        <div className="footer__logo">
                            <img src="../../../FTX/img/footer/logo-white.svg" alt="Logotype"/>
                            {
                                isLinkBtnShoweble && <a href="##" className="footer__link">Connect with Us</a>
                            }
                        </div>
                        <div className="footer__social">
                            <a href="##" className="footer__icon">
                                <img src="../../../FTX/img/footer/facebook.svg" alt="Fb"/>
                            </a>
                            <a href="##" className="footer__icon">
                                <img src="../../../FTX/img/footer/twitter.svg" alt="twitter"/>
                            </a>
                            <a href="##" className="footer__icon">
                                <img src="../../../FTX/img/footer/linked.svg" alt="linked"/>
                            </a>
                            <a href="##" className="footer__icon">
                                <img src="../../../FTX/img/footer/insta.svg" alt="insta"/>
                            </a>
                            <a href="##" className="footer__icon">
                                <img src="../../../FTX/img/footer/tick.svg" alt="tick"/>
                            </a>
                            {
                                isYtbShoweble && 
                                <a ref={ytbRef} href="##" className="footer__icon">
                                    <img src="../../../FTX/img/footer/yt.svg" alt="youtub"/>
                                </a>
                            }
                            
                        </div>
                        {
                            !isDownloadMoveble  &&
                            <div ref={downloadRef} className="footer__download">
                                <a href="##">
                                    <img src="../../../FTX/img/footer/apple.svg" alt="Apple download "/>
                                </a>
                                <a href="##">
                                    <img src="../../../FTX/img/footer/google.svg" alt="Google download"/>
                                </a>
                        </div>
                        }
                        
                    </li>
                    <li className="footer__column">
                        <details className="footer__details">
                            <summary>Trading</summary>
                            <div>
                                <ul>
                                    <li>
                                        <a href="##">Trading Accounts</a>
                                    </li>
                                    <li>
                                        <a href="##">Trading Platforms</a>
                                    </li>
                                    <li>
                                        <a href="##">Trading Conditions</a>
                                    </li>
                                    <li>
                                        <a href="##">Market Hours & Events</a>
                                    </li>
                                    <li>
                                        <a href="##">Deposit & Withdrawals</a>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </li>
                    <li className="footer__column">
                        <details className="footer__details">
                            <summary>Trading Markets</summary>
                            <div>
                                <ul>
                                    <li>
                                        <a href="##">Forex</a>
                                    </li>
                                    <li>
                                        <a href="##">Crypto CFDs</a>
                                    </li>
                                    <li>
                                        <a href="##">Share CFDs</a>
                                    </li>
                                    <li>
                                        <a href="##">Commodities</a>
                                    </li>
                                    <li>
                                        <a href="##">Spot Metals</a>
                                    </li>
                                    <li>
                                        <a href="##">Energies</a>
                                    </li>
                                    <li>
                                        <a href="##">Indices</a>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </li>
                    <li className="footer__column">
                        <details className="footer__details">
                            <summary>Incubation program</summary>
                            <div>
                                <ul>
                                    <li>
                                        <a href="##">Aspiring Pro</a>
                                    </li>
                                    <li>
                                        <a href="##">Incubation</a>
                                    </li>
                                    <li>
                                        <a href="##">FXT Select</a>
                                    </li>
                                    <li>
                                        <a href="##">Licensed Funds Managers</a>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </li>
                    <li className="footer__column">
                        <details className="footer__details">
                            <summary>Copy trading</summary>
                            <div>
                                <ul>
                                    <li>
                                        <a href="##">Copy Top Traders</a>
                                    </li>
                                    <li>
                                        <a href="##">Popular Investor Program</a>
                                    </li>
                                    <li>
                                        <a href="##">Investment Portfolios</a>
                                    </li>
                                    <li>
                                        <a href="##">Fees</a>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </li>
                    <li className="footer__column">
                        <details className="footer__details">
                            <summary>Education/ Resources</summary>
                            <div>
                                <ul>
                                    <li>
                                        <a href="##">Videos (tutorials)</a>
                                    </li>
                                    <li>
                                        <a href="##">Market News & Analysis</a>
                                    </li>
                                    <li>
                                        <a href="##">Trading Tools</a>
                                    </li>
                                    <li>
                                        <a href="##">Traders` Community/Club</a>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </li>
                    <li className="footer__column">
                        <details className="footer__details">
                            <summary>Company</summary>
                            <div>
                                <ul>
                                    <li>
                                        <a href="##">About</a>
                                    </li>
                                    <li>
                                        <a href="##">Why Choose us?</a>
                                    </li>
                                    <li>
                                        <a href="##">Regulation</a>
                                    </li>
                                    <li>
                                        <a href="##">Company News</a>
                                    </li>
                                    <li>
                                        <a href="##">Careers</a>
                                    </li>
                                    <li>
                                        <a href="##">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="##">Reviews</a>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </li>
                </ul>
                {
                    isDownloadMoveble  &&
                    <div ref={downloadRef} className="footer__download">
                        <a href="##">
                            <img src="../../../FTX/img/footer/apple.svg" alt="Apple download "/>
                        </a>
                        <a href="##">
                            <img src="../../../FTX/img/footer/google.svg" alt="Google download"/>
                        </a>
                    </div>
                }
            </nav>
            <div className="footer__copy ">
                <h4>
                    Made with <img src="../../../FTX/img/footer/heart.svg" alt=""/> in Australia
                </h4>
                <p>
                © Copyright 2022 FXTRADING.com (FXT)
                </p>
            </div>
            <div className="footer__pay">
                <a href='##' className="footer__image">
                    <img src="../../../FTX/img/footer/visa.svg" alt=""/>
                </a>
                <a href='##' className="footer__image">
                    <img src="../../../FTX/img/footer/mastercard.svg" alt=""/>
                </a>
                <a href='##' className="footer__image">
                    <img src="../../../FTX/img/footer/paypal.svg" alt=""/>
                </a>
                <a href='##' className="footer__image">
                    <img src="../../../FTX/img/footer/skrill.svg" alt=""/>
                </a>
                <a href='##' className="footer__image">
                    <img src="../../../FTX/img/footer/neteller.svg" alt=""/>
                </a>
                <a href='##' className="footer__image">
                    <img src="../../../FTX/img/footer/more.svg" alt=""/>
                </a>
            </div>
            <div className="footer__text">
                <p>
                Any advice included in this website or correspondence is general advice only and is based solely on consideration of the investment or trading merits of the financial products alone, without taking into account the investment objectives, financial situation and particular needs (i.e. financial circumstances) of any particular person. Before making an investment or trading decision based on the advice, the recipient should carefully consider the appropriateness of advice in light of his or her financial circumstances and should carefully review the Product Disclosure Statement regarding the relevant financial product as provided by your investment broker. Investing in over-the-counter derivatives carries significant risks and is not suitable for all investors. You could lose substantially more than your initial investment. When acquiring derivative products, you have no entitlement, right or obligation to the underlying financial asset.
                </p>
                <p>
                    Regulation:
                </p>
                <p>
                    Vanuatu
                </p>
                <p>
                    FXTRADING.com is a trading name of Gleneagle Securities Pty Ltd , Vanuatu Financial Services Commission (Company Number 40256).
                </p>
                <p>
                    Restricted Countries: Please note that we are unable to open accounts for the following countries and jurisdictions at this time. This list is subject to change at any time.
                    America (USA), Ontario Province inside Canada, North Korea, Iran, Japan, and New Zealand.
                </p>
                <p>
                    The information on the website is not directed to residents of any country where FX and /or CFDs trading is restricted or prohibited by local laws or regulations.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;