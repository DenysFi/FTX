import Tabs from '../common/tabs/tabs';
import TabItem from '../common/tabs/tabItem';
import FtxSwiper from '../common/swiper/ftxSwiper';
import Card from '../common/card/Card';


const Currency = () => {

 
  return (
    <section className='currency'>
        <div className="currency__container">
            <div className="currency__tabs tabs">
                <Tabs modifButtonClass={'currency'} modifBodyClass={'currency__body'} modifNavClass='currency__nav'>
                    <TabItem tablabel = 'Forex' tabIndex = '1' >
                      <FtxSwiper>
                        <Card modif={"currency__card"} />
                        <Card modif={"currency__card"} />
                        <Card modif={"currency__card"} />
                        <Card modif={"currency__card"} />
                        <Card modif={"currency__card"} />
                        <Card modif={"currency__card"} />
                        <Card modif={"currency__card"} />
                        <Card modif={"currency__card"} />
                        <Card modif={"currency__card"} />
                        <Card modif={"currency__card"} />
                      </FtxSwiper>
                    </TabItem>
                    <TabItem tablabel = 'Crypto CFDs' tabIndex = '2'>
                      <FtxSwiper>
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                      </FtxSwiper>
                    </TabItem>
                    <TabItem tablabel = 'Share CFDs' tabIndex = '3'>
                      <FtxSwiper>
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                      </FtxSwiper>
                    </TabItem>
                    <TabItem tablabel = 'Commodities' tabIndex = '4'>
                      <FtxSwiper>
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                      </FtxSwiper>
                    </TabItem>
                    <TabItem tablabel = 'Spot Metals' tabIndex = '5'>
                      <FtxSwiper>
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                      </FtxSwiper>
                    </TabItem>
                    <TabItem tablabel = 'Energies' tabIndex = '6'>
                      <FtxSwiper>
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                      </FtxSwiper>
                    </TabItem>
                    <TabItem tablabel = 'Indices' tabIndex = '7'>
                      <FtxSwiper>
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                          <Card modif={"currency__card"} />
                      </FtxSwiper>
                    </TabItem>
                </Tabs>
            </div>
        </div>
    </section>
  );
};

export default Currency;