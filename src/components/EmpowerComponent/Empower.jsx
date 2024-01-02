import React, { useEffect, useRef   } from 'react';
import BlockHeader from '../common/block-header/BlockHeader';
import Spoillers from '../../CustomClasses/Accordion';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Empower = () => {
    const spillersBlock = useRef(null);

    function initSpolers(){
        const node = spillersBlock.current;
        let spoilers;
        if(spillersBlock.current !== null){
           spoilers =  new Spoillers(node, 'min');
        }
     
        // return () => {spoilers.destroy();spoilers = null };
    }
    useEffect(initSpolers, []);

  return (
    <section className='empower'>
        <div className="empower__container">
            <BlockHeader modif={['_bold']} titletext={'Empower your trading with FXT'} text={'<p>Get access to world class trading platforms on MetaTrader 4(MT4),MetaTrader 5 (MT5), With in-House build institutional trading tool and advanced copy trading community to empower your Trading</p>'}></BlockHeader>
            <div className="empower__content">
              <div className="empower__spoilers-wrapper">
                <div data-one data-mediaquery='767' ref={spillersBlock} className="empower__spoilers" aria-label='spoillers'>
                      <details className='empower__spoiler spoiler-empower'>
                          <summary className='spoiler-empower__title'>Trading Account Types </summary>
                          <div className="spoiler-empower__body">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis deserunt aspernatur temporibus? Nesciunt nulla perspiciatis unde repudiandae officiis debitis, amet eveniet hic, impedit, labore inventore fugiat. Vero eius assumenda necessitatibus?
                          </div>
                      </details>
                      <details data-one-opened className='empower__spoiler spoiler-empower' >
                          <summary className='spoiler-empower__title'>Trading platform, MT4, MT5 +  +App </summary>
                          <div className="spoiler-empower__body">
                              Trade on the go anytime, anywhere
                          </div>
                      </details>
                      <details className='empower__spoiler spoiler-empower'>
                          <summary className='spoiler-empower__title'>FXT Navigator TM</summary>
                          <div className="spoiler-empower__body">
                              Trade on the go anytime, anywhere
                          </div>
                      </details>
                      <details className='empower__spoiler spoiler-empower'>
                          <summary className='spoiler-empower__title'>FXT Score</summary>
                          <div className="spoiler-empower__body">
                              Trade on the go anytime, anywhere
                          </div>
                      </details>
                  </div>
              </div>
                
                <div className="empower__image">
                <LazyLoadImage 
                    src="../../../img/Emprower/image.png" alt="emprower image"
                    placeholderSrc='../../../img/Emprower/imageO.png'
                    loading='lazy'
                    effect="blur"
                >
                </LazyLoadImage>
                    {/* <img src="../../../img/Emprower/image.png" alt="emprower image"/> */}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Empower;


// class Accordion {
//   constructor(el) {
//     this.el = el;
//     this.summary = el.querySelector('summary');
//     this.content = el.querySelector('div');
//     this.animation = null;
//     this.isClosing = false;
//     this.isExpanding = false;
//     this.spolerDefaultHeight = this.el.offsetHeight;
//     this.summary.addEventListener('click', (e) => this.onClick(e));
//   }

//   onClick(e) {
//     // Stop default behaviour from the browser
//     e.preventDefault();
//     // Add an overflow on the <details> to avoid content overflowing
//     this.el.style.overflow = 'hidden';
//     // Check if the element is being closed or is already closed
//     if (this.isClosing || !this.el.open) {
//       this.open();
//     // Check if the element is being openned or is already open
//     } else if (this.isExpanding || this.el.open) {
//       this.shrink();
//     }
//   }

//   shrink() {
//     // Set the element as "being closed"
//     this.isClosing = true;
    
//     // Store the current height of the element
//     const startHeight = `${this.el.offsetHeight}px`;
//     // Calculate the height of the summary
//     const endHeight = `${this.spolerDefaultHeight}px`;
//     console.log(endHeight);
//     // If there is already an animation running
//     if (this.animation) {
//       // Cancel the current animation
//       this.animation.cancel();
//     }
//     this.el.classList.remove('_spoiler-active') ;
//     // Start a WAAPI animation
//     this.animation = this.el.animate({
//       // Set the keyframes from the startHeight to endHeight
//       height: [startHeight, endHeight]
//     }, {
//       duration: 400,
//       easing: 'ease-out'
//     });
    
//     // When the animation is complete, call onAnimationFinish()
//     this.animation.onfinish = () => this.onAnimationFinish(false);
//     // If the animation is cancelled, isClosing variable is set to false
//     this.animation.oncancel = () => this.isClosing = false;
//   }

//   open() {
//     // Apply a fixed height on the element
//     this.el.style.height = `${this.spolerDefaultHeight}px`;
//     // Force the [open] attribute on the details element
//     this.el.open = true;
//     // Wait for the next frame to call the expand function
//     window.requestAnimationFrame(() => this.expand());
//   }

//   expand() {
//     // Set the element as "being expanding"
//     this.isExpanding = true;
//     // Get the current fixed height of the element
//     const startHeight = `${this.el.offsetHeight}px`;
//     // Calculate the open height of the element (summary height + content height)
//     const endHeight = `${this.content.offsetHeight + this.spolerDefaultHeight}px`;
//     console.log(startHeight, endHeight);
//     // If there is already an animation running
//     if (this.animation) {
//       // Cancel the current animation
//       this.animation.cancel();
//     }
//     this.el.classList.add('_spoiler-active') ;
//     // Start a WAAPI animation
//     this.animation = this.el.animate({
//       // Set the keyframes from the startHeight to endHeight
//       height: [startHeight, endHeight]
//     }, {
//       duration: 400,
//       easing: 'ease-out'
//     });
//     // When the animation is complete, call onAnimationFinish()
//     this.animation.onfinish = () => this.onAnimationFinish(true);
//     // If the animation is cancelled, isExpanding variable is set to false
//     this.animation.oncancel = () => this.isExpanding = false;
//   }

//   onAnimationFinish(open) {
//     this.el.open = open;
    
//     this.animation = null;
//     this.isClosing = false;
//     this.isExpanding = false;
//     this.el.style.height = this.el.style.overflow = '';
//   }
// }