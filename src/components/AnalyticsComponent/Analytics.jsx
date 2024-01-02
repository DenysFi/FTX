import React from 'react';
import BlockHeader from '../common/block-header/BlockHeader';
import FtxButton from '../common/ftxButton/Button';

const Analytics = () => {
  return (
    <section className='analitycs'>
        <div className="analitycs__container">
            <div className="analitycs__wpapper">
                <div className="analitycs__content">
                    <BlockHeader modif={[ 'analitycs__header', '_white']} >Enjoy advanced <strong>Analytics, Trade and Invest</strong> on the go with your Mobile MT5 app</BlockHeader>
                    <FtxButton modif={['bold','analitycs__link' ]} link={true}>Download the App</FtxButton>
                </div>
                <div className="analitycs__image">
                    <img src="../../../img/Analytics/image.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Analytics;