export function topScroll() {
   const $scrollButton = document.querySelector('.top-scroll-btn');
   const $services = document.querySelector('.services');

   // При клике на кнопку
   $scrollButton.addEventListener('click', e => {
      // Прокрутим страницу к форме 
      $services.scrollIntoView({
         block: 'start', // к ближайшей границе экрана
         behavior: 'smooth', // и плавно 
      });
   });

   
}