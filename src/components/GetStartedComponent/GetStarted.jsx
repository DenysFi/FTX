import React from 'react';
import BlockHeader from '../common/block-header/BlockHeader';
import Tabs from '../common/tabs/tabs';
import TabItem from '../common/tabs/tabItem';
import FtxButton from '../common/ftxButton/Button';

const GetStarted = () => {
  return (
    <section className='get-started'>
        <div className="get-started__container">
            <BlockHeader modif={['_bold']} titletext={"How to Get Started"}></BlockHeader>
            <Tabs modifTabsClass={'get-started__tabs'} modifButtonClass={'get-started'} modifBodyClass={'get-started__body'}  modifNavClass={'get-started__nav'}>
                <TabItem tablabel='Aspiring Pro' tabIndex='2'>
                    Первый  таб
                <div className="get-started__cards">
                <article className="get-started__card card-get-started">
                            <div className="card-get-started__image">
                                {/* <img src="../../../img/Getstarted/01.png" alt=""/> */}
                            </div>
                            <div className="card-get-started__instruction">
                                <span>1</span>
                                <p>Register</p>
                            </div>
                        </article>
                        <article className="get-started__card card-get-started">
                            <div className="card-get-started__image">
                                {/* <img src="../../../img/Getstarted/02.png" alt=""/> */}
                            </div>
                            <div className="card-get-started__instruction">
                                <span>2</span>
                                <p>Verify</p>
                            </div>
                        </article>
                        <article className="get-started__card card-get-started">
                            <div className="card-get-started__image">
                                {/* <img src="../../../img/Getstarted/03.png" alt=""/> */}
                            </div>
                            <div className="card-get-started__instruction">
                                <span>3</span>
                                <p>Fund</p>
                            </div>
                        </article>
                        <article className="get-started__card card-get-started">
                            <div className="card-get-started__image">
                                {/* <img src="../../../img/Getstarted/04.png" alt=""/> */}
                            </div>
                            <div className="card-get-started__instruction">
                                <span>4</span>
                                <p>Invest</p>
                            </div>
                        </article>
                    </div>
                    <FtxButton modif={['bold','card-get-started__link']} link={true}>Get Started</FtxButton>
                </TabItem>
                <TabItem tablabel='Investor' tabIndex='1'>
                    <div className="get-started__cards">
                        <article className="get-started__card card-get-started">
                            <div className="card-get-started__image">
                                {/* <img src="../../../img/Getstarted/01.png" alt=""/> */}
                            </div>
                            <div className="card-get-started__instruction">
                                <span>1</span>
                                <p>Register</p>
                            </div>
                        </article>
                        <article className="get-started__card card-get-started">
                            <div className="card-get-started__image">
                                {/* <img src="../../../img/Getstarted/02.png" alt=""/> */}
                            </div>
                            <div className="card-get-started__instruction">
                                <span>2</span>
                                <p>Verify</p>
                            </div>
                        </article>
                        <article className="get-started__card card-get-started">
                            <div className="card-get-started__image">
                                {/* <img src="../../../img/Getstarted/03.png" alt=""/> */}
                            </div>
                            <div className="card-get-started__instruction">
                                <span>3</span>
                                <p>Fund</p>
                            </div>
                        </article>
                        <article className="get-started__card card-get-started">
                            <div className="card-get-started__image">
                                {/* <img src="../../../img/Getstarted/04.png" alt=""/> */}
                            </div>
                            <div className="card-get-started__instruction">
                                <span>4</span>
                                <p>Invest</p>
                            </div>
                        </article>
                    </div>
                    <FtxButton modif={['bold','card-get-started__link']} link={true}>Get Started</FtxButton>
                </TabItem>
            </Tabs>
            
        </div>
    </section>
  );
};

export default GetStarted;