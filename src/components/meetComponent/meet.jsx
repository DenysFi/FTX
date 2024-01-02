import React from 'react';
import BlockHeader from '../common/block-header/BlockHeader';
import CardMeet from './CardMeet';
import FtxButton from '../common/ftxButton/Button';

const Meet = () => {
  return (
    <section className='meet'>
        <div className="meet__container">
            <BlockHeader modif={["_bold"]} titletext={"Meet Our Pros"} text={" <p>Choose your favorite trader from Aspiring Pros and FXT Select. Ease your mind with FXT Score- FXT's patented</p>"}/>
            <div className="meet__cards">
                <CardMeet></CardMeet>
                <CardMeet></CardMeet>
                <CardMeet></CardMeet>
            </div>
            <FtxButton modif={['meet__button', 'bold']} link={true}>More</FtxButton>
        </div>
    </section>
  );
};

export default Meet;