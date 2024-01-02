import React, { useRef } from 'react';
import BlockHeader from '../common/block-header/BlockHeader';
import FtxButton from '../common/ftxButton/Button';
import useMediaChange from '../../hooks/useMediaChange';

const Community = () => {
    const ref = useRef(null);
    const isMoveble = useMediaChange(ref.current, 991)
  return (
    <section className='community'>
        <div className="community__container">
            <div className="community__content">
                <BlockHeader  text={"<p>Description The investment team maintains in REAL time that all Pro's comply with Ditto's risk mandate The investment team maintains</p>"} modif={['_bold','community__header']}>Join a community that is <strong className='marker'>transparent and supportive</strong> </BlockHeader>
                <div className="community__labels">
                    <div  className="community__label label-community">
                        <img  className="label-community__icon" src='../../../FTX/img/common/card-offer/label-ico/01.svg' loading='lazy' alt="icon"/>
                        <div className="label-community__text">Feature 1</div>
                    </div>
                    <div  className="community__label label-community">
                        <img  className="label-community__icon" src='../../../FTX/img/common/card-offer/label-ico/02.svg' loading='lazy' alt="icon"/>
                        <div className="label-community__text">Feature 2</div>
                    </div>
                    <div  className="community__label label-community">
                        <img  className="label-community__icon" src='../../../FTX/img/common/card-offer/label-ico/03.svg' loading='lazy' alt="icon"/>
                        <div className="label-community__text">Feature 3</div>
                    </div>
                </div>
                {isMoveble && <div  className="community__image">
                <img src="../../../FTX/img/Community/img.png" loading='lazy' alt="icon"/>
            </div>}
                <FtxButton modif={[ 'community__link']} link={true}>Join Now</FtxButton>
            </div>
            {!isMoveble && <div  className="community__image">
                <img src="../../../FTX/img/Community/img.png" loading='lazy' alt="icon"/>
            </div>}
        </div>
    </section>
  );
};

export default Community;