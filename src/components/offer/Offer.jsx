import React, { useEffect, useState } from 'react';


import CardOffer from '../common/card-offer/CardOffer';
const Offer =  () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch('../../../FTX/offers.json');
            if (!resp.ok) {
              throw new Error(`Error: ${resp.status} - ${resp.statusText}`);
            }
            const jsonData = await resp.json();
            setItems(jsonData.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <section className='offer'>
        <div className="offer__container">
            <div className="offer__cards">
                {items.length > 0 &&  items.map((data, i) => <CardOffer key={i} data={data}></CardOffer> )}
            </div>

        </div>
    </section>
  );
};

export default Offer;