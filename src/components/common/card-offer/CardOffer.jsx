import React, { useRef } from 'react';
import BlockHeader from '../block-header/BlockHeader';
import FtxButton from '../ftxButton/Button';
import useMediaChange from '../../../hooks/useMediaChange'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardOffer = ({data}) => {
    const imageBlock = useRef(null);
    const textBlock = useRef(null);
    const isMovebleImage = useMediaChange(imageBlock.current, '991');
    const isMovebleText = useMediaChange(textBlock.current, '991');
  return (
        <article className="offer__card card-offer">
            <div className="card-offer__content">
                <div className="card-offer__sub-title">
                    <div className="card-offer__icon">
                        <img src={data.subtitile.iconSrc} alt=""/>
                    </div>
                    {data.subtitile.title}
                </div>
                <BlockHeader
                    isMovebleText ={isMovebleText}
                    titletext={data.title}
                    text={data.text}
                >
                </BlockHeader>
                {isMovebleImage && <div ref={imageBlock} className="card-offer__image">
                    <img src={data.imgSrc} alt="" />
                </div>}
               
                <div className="card-offer__labels">
                    {
                        data.labels.map(label => {
                            return (
                                <div key={label.title} className="card-offer__label label-offer">
                                    <img  className="label-offer__icon" src={label.srcIcon} alt=""/>
                                    <div className="label-offer__text">{label.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <FtxButton modif={['label-offer__button', '_transperent', '_bold-orange']} link={true} >Learn more</FtxButton>
            </div>
            {!isMovebleImage && <div ref={imageBlock} className="card-offer__image">
                <LazyLoadImage 
                alt='Offer image'
                src={data.imgSrc}
                placeholderSrc={data.imgSrcHolder}
                loading='lazy'
                effect="blur"
                >
                </LazyLoadImage>
                {/* <img src={data.imgSrc} alt="" /> */}
            </div>}
        </article>
  );
};

export default CardOffer;