export function onContentLoaded(){
    window.onload = function() {
        // Код, который нужно выполнить после полной загрузки приложения
        document.documentElement.classList.add('loaded')
      };
}
onContentLoaded();

export function toggleLock(){
  document.documentElement.classList.toggle('lock');
}
export function handleMenu(){
  if(!document.documentElement.classList.contains('menu-open')){
      openBurger();
      toggleLock();
  }
  else{
      closeBurger();
      toggleLock();
  }
}
export function closeBurger(){
  document.documentElement.classList.remove('menu-open');
}
export function openBurger(){
  document.documentElement.classList.add('menu-open');
}
