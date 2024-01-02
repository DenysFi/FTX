import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../../../scss/base/swiper.scss';
import Card from '../card/Card';

const FtxSwiper = ({children}) => {
    const swiperRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [sliedesPerView, setSliedesPerView] = useState(5);
    
    useEffect (()=>{
      const handleSlidesPerView = () => {
        swiperRef.current 
        && window.innerWidth  >= 1050?  setSliedesPerView(5) 
        : window.innerWidth  >= 800 && window.innerWidth  < 1050? setSliedesPerView(4)
        : window.innerWidth > 450 && window.innerWidth < 800?(setSliedesPerView(2)) : setSliedesPerView('auto') ;
      }
      const observer = new ResizeObserver(handleSlidesPerView)
      observer.observe(swiperRef.current);
      handleSlidesPerView();
  
      return () => observer.disconnect();
    },[])
    
  return (
    <>
        {/* watchSlidesProgress - checking for visible of slide and add classes  */}
        <Swiper 
        ref={swiperRef}
        spaceBetween={ 20 }
        slidesPerView={sliedesPerView}
        watchSlidesProgress
        centeredSlides = {false}
        modules={[Navigation]}
        navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        >
          {
            children?.map((child, i) => (<SwiperSlide key={i}>{child}</SwiperSlide>))
          }
            {/* <SwiperSlide><Card modif={"currency__card"} /></SwiperSlide>
            <SwiperSlide><Card modif={"currency__card"}/></SwiperSlide>
            <SwiperSlide><Card modif={"currency__card"}/></SwiperSlide>
            <SwiperSlide><Card modif={"currency__card"}/></SwiperSlide>
            <SwiperSlide><Card modif={"currency__card"}/></SwiperSlide>
            <SwiperSlide><Card modif={"currency__card"}/></SwiperSlide>
            <SwiperSlide><Card modif={"currency__card"}/></SwiperSlide>
            <SwiperSlide><Card modif={"currency__card"}/></SwiperSlide>
            <SwiperSlide><Card modif={"currency__card"}/></SwiperSlide>
            <SwiperSlide><Card modif={"currency__card"}/></SwiperSlide> */}
            
        </Swiper>
        <div className='swiper__buttons'>
                <button ref={navigationPrevRef} className='swiper__button-prev'>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 60 60" fill="none">
                        <path d="M32.5 36.2504L26.25 30.0004L32.5 23.7504" stroke="#FF902E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button ref={navigationNextRef} className='swiper__button-next'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M32.5 36.2504L26.25 30.0004L32.5 23.7504" stroke="#FF902E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
        </div>
    </>
  );
};

export default FtxSwiper;