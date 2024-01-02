import React from 'react';
//props:  currency, imagesArray, rows : row.title, row.value, modif - classname of parrent component or element
const Card = ({modif}) => {
    const classes = modif ? modif + ' card': 'card';
  return (
    <article className={classes}>
        <div className="card__currency">EUR/USD</div>
        <div className="card__images">
            <img src="../../../../FTX/img/common/card/eur.jpg" loading='lazy' alt="eur" />
            <img src="../../../../FTX/img/common/card/usa.jpg" loading='lazy' alt="usa" />
        </div>
        <table className='card__table'>
        <tbody className='card__body'>
            <tr className='card__row'>
                <td className='card__label'>Bid</td>
                <td className='card__value'>$1.05755</td>
            </tr>
            <tr className='card__row'>
                <td className='card__label'>Ask</td>
                <td className='card__value'>0.551%</td>
            </tr>
            <tr className='card__row'>
                <td className='card__label'>Spread</td>
                <td className='card__value'>0.452</td>
            </tr>
            </tbody>
        </table>
        <div className="card__buttons">
            <button className='card__button card__button--red' type="submit" >Sell</button>
            <button className='card__button card__button--blue' type="submit" >Buy</button>
        </div>
    </article>
  );
};

export default Card;