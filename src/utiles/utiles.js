export function onContentLoaded(){
    window.onload = function() {
        // Код, который нужно выполнить после полной загрузки приложения
        document.documentElement.classList.add('loaded')
      };
}
onContentLoaded();