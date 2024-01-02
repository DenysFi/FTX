import React from 'react';
import FtxButton from '../common/ftxButton/Button';

const CardMeet = (props) => {
  return (
    <article className='card-meet'>
        <div className="card-meet__user">
            <div className="card-meet__icon">
                <img src="../../../img/meet/meet-card/user.jpg"  loading='lazy' alt="user"/>
            </div>
            <div className="card-meet__user-body">
                <h5 className="card-meet__username">Michael Moss</h5>
                <div className="card-meet__strategy">Strategy: Night Shift EA</div>
            </div>
        </div>
        <div className="card-meet__body">
            <div className="card-meet__labels">
                <div className="card-meet__invested">Invested: <span>$15,383</span></div>
                <div className="card-meet__score">FXT Score: <span>89</span></div>
            </div>
            <div className="card-meet__image">
            <img src="../../../img/meet/meet-card/01.png" loading='lazy' alt="01"/>
            </div>
            <div className="card-meet__info">
                <div className="card-meet__row">
                    <div className="card-meet__column">
                        <div className="card-meet__name">Performance:</div>
                        <div className="card-meet__value">14,44%</div>
                    </div>
                    <div className="card-meet__column">
                        <div className="card-meet__name">Max DD:</div>
                        <div className="card-meet__value">-11,45%</div>
                    </div>
                </div>
                <div className="card-meet__row">
                    <div className="card-meet__column">
                        <div className="card-meet__name">Followers:</div>
                        <div className="card-meet__value">176</div>
                    </div>
                    <div className="card-meet__column">
                        <div className="card-meet__name">Account age:</div>
                        <div className="card-meet__value">1y 2m</div>
                    </div>
                </div>
            </div>
            <FtxButton modif={['card-meet__button']} link={true}>Follow</FtxButton>
        </div>
    </article>
  );
};

export default CardMeet;