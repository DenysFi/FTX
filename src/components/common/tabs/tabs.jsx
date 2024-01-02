import React, { useRef, useState } from 'react';
import TabNav from './tabNav';
import { CSSTransition, TransitionGroup, SwitchTransition } from 'react-transition-group';
import './tabs.scss';

const Tabs = ({children, modifNavClass, modifBodyClass, modifTabsClass, modifButtonClass}) => {
    const flag = children instanceof Array;
    const navButtons = flag ?  children.map((element => element.props.tablabel)): children.props.tablabel ;
    const [activeTabIndex, setActiveTabIndex ] = useState('1');
    const activeTab = findNewActiveTab();
    const tref = useRef(null);
    function findNewActiveTab(){
        return flag ? children?.find(({props}) =>  props.tabIndex === activeTabIndex): children;
    }
   
    function switchTab(label){
        const newIndex = flag ? children.find(({props}) => props.tablabel === label).props.tabIndex : children;
        setActiveTabIndex(newIndex);
    }
  return (
    <div className={modifTabsClass}>
        <nav className={modifNavClass}>
            {
            !flag ? <TabNav key={navButtons} 
            isActive = {activeTab.props.tablabel === navButtons}
            tabLabel={navButtons}
            classTitle = {modifButtonClass}
            onClick = {switchTab}
            >
            
            {navButtons}
            </TabNav>
            : navButtons.map( 
                label => 
                <TabNav key={label} 
                isActive = {activeTab.props.tablabel === label}
                tabLabel={label}
                onClick = {switchTab}
                classTitle = {modifButtonClass}
                >
                
                {label}
                </TabNav>
            )}
        </nav>
        <SwitchTransition  mode='out-in' >
            <CSSTransition
                key={activeTab.props.tabIndex}
                timeout={400} 
                classNames="fade" 
                nodeRef={tref}
            >
                <div ref={tref} className={modifBodyClass}>
                    {activeTab}
                </div>
            </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Tabs;