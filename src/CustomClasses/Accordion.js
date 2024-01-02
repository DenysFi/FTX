export default class Spoillers {
    constructor(node, type, duration = 300 ) {
      this.node = node;
      this.freezed = false;
      this.duration = duration;
      this.details = Array.from(this.node.querySelectorAll('details'));
      this.mediaQuery = this.node.dataset.mediaquery ? `(${type}-width:${this.node.dataset.mediaquery}px)`: false;  
      this.spoilers = [];
      this.oneSpoiler = this.node.dataset.one || false;
      if(this.mediaQuery.length) {
        this.listenToMediaQuery();
      }
      this.initSpoilers();
    }
    freezSpoilers(){
      this.details.forEach(detail => {
        this.freezed = true;
        detail.open = true;
        detail.tabIndex= '-1';
        detail.querySelector('summary').style.pointerEvents = 'none'
        detail.classList.add('_spoiler-active');
        
      });
    }
    update(){
      this.spoilers.forEach(spoler => spoler.setSpolerDefaultHeight());
    }
    unfreezSpoilers(){
        this.details.forEach(detail => {
        detail.open = false;
        detail.tabIndex= '1';
        detail.querySelector('summary').style.removeProperty('pointer-events')
        detail.classList.remove('_spoiler-active');
        this.update();

      });
    }
    initSpoilers(){
      this.spoilers = this.details.map((detail) =>{
        return new Accordion(detail, this.duration);
      })
      
      this.oneSpoiler && this.spoilers.forEach(spoler => spoler.setCallback(this.closeAll.bind(this)))
    }
    handleSpoillers(){
      if(!this.query.matches ){
        this.freezSpoilers();
      }
      else{
        this.unfreezSpoilers();
      }
    }
    listenToMediaQuery(){
        this.query = window.matchMedia(this.mediaQuery);
        this.query.addEventListener('change', () => this.handleSpoillers() )
        this.handleSpoillers();
    }
    closeAll(){
      this.spoilers.forEach(spoiler => spoiler.open && spoiler.shrink())
    }
    // destroy(){
    //     this.spoilers.forEach(spoiler => spoiler.destroy())
    //     this.query.removeEventListener('change', () => this.handleSpoillers());
    //     this.query = null;
    // }
  }
class Accordion {
  constructor(el, duration) {
    this.duration = duration;
    this.callback = null;
    this.el = el;
    this.summary = this.el.querySelector('summary');
    this.content = this.el.querySelector('div');
    this.animation = null;
    this.setSpolerDefaultHeight();
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener('click', (e) => this.onClick(e));
    // window.addEventListener('resize', () => (this.setSpolerDefaultHeight()));
    if(el.dataset.oneOpened){
       this.open();
    }
  }
  updateData(){
    
  }
  setSpolerDefaultHeight(){
    this.spolerDefaultHeight = this.el.offsetHeight;
  }
  onClick(e) {
    e.preventDefault();
    if (this.isClosing || !this.el.open) {
      this.callback !== null && this.callback(); 
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }
  
  shrink() {
    this.isClosing = true;
    this.el.style.overflow = 'hidden';
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.spolerDefaultHeight}px`;
    if (this.animation) {
      this.animation.cancel();
    }
    this.el.classList.remove('_spoiler-active') ;
    // Start a WAAPI animation
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: this.duration,
      easing: 'ease-out'
    });
    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancel = () => this.isClosing = false;
  }

  open() {
    this.el.style.height = `${this.spolerDefaultHeight}px`;
    this.el.style.overflow = 'hidden';
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.el.classList.add('_spoiler-active') ;
    this.isExpanding = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const targetMarginBottom = window.getComputedStyle(this.content, null).marginBottom.slice(0, -2);
    const endHeight = `${this.content.offsetHeight + this.spolerDefaultHeight + +targetMarginBottom}px`;
    if (this.animation) {
      this.animation.cancel();
    }
    // Start a WAAPI animation
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: this.duration,
      easing: 'ease-out',
    });
    this.animation.onfinish = () => this.onAnimationFinish(true);
    this.animation.oncancel = () => this.isExpanding = false;
  }

  setCallback(callback){
      this.callback = callback;
  }  

  onAnimationFinish(open) {
    this.el.open = open;
    
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = '';
  }
//   destroy(){
//     this.summary.removeEventListener('click', (e) => this.onClick(e));
//   }
}