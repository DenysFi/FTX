import React from 'react';
import Header from '../components/HeaderComponents/Header.jsx';
import Hero from '../components/HeroComponent/Hero.jsx';
import Label from '../components/common/Label/Label.jsx';
import Partners from '../components/partners/Partners.jsx';
import Currency from '../components/currencyComponent/Curency.jsx';
import Offer from '../components/offer/Offer.jsx';
import Fitured from '../components/Fitured/Fitured.jsx';
import Investing from '../components/investingComponent/Investing.jsx';
import Meet from '../components/meetComponent/meet.jsx';
import Empower from '../components/EmpowerComponent/Empower.jsx';
import Trade from '../components/TradeComponent/Trade.jsx';
import GetStarted from '../components/GetStartedComponent/GetStarted.jsx';
import GetSelected from '../components/GetSelectedComponent/GetSelected.jsx';
import Community from '../components/CommunityComponent/Community.jsx';
import Analytics from '../components/AnalyticsComponent/Analytics.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Home = () => {
  return (
    <>  
      <main className='wrapper'>
          <Hero />
          <Label>Whether you are a newbie or an experienced trader, Grab an oppurtunity  to Stay on Top of the volatile market</Label>
          <Partners/>
          <Currency/>
          <Offer/>
          <Fitured/>
          <Investing/>
          <Meet/>
          <Empower/>
          <Trade/>
          <GetStarted/>
          <GetSelected/>
          <Community/>
          <Analytics/>
      </main>
    </>
  );
};

export default Home;