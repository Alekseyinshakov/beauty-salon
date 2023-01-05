export function headerAnimate() {
   // Animation title and header
   document.querySelector('.header').classList.add('header-animate');
   document.querySelector('.header-adaptive').classList.add('header-adaptive-animate');

   const mainTitle = document.querySelector('.top-title');

   if (mainTitle) {
      mainTitle.classList.remove('top-title-hide');
   }



   // Panel

   const panel = document.querySelector(".header__panel")

   document.querySelector('.header__panel-btn').addEventListener("click", () => {
      panel.classList.remove("hide");
   })

   document.querySelector(".close-btn").addEventListener("click", () => {
      panel.classList.add("hide");
   })


   // drop down menu

   document.querySelector('.header-adaptive__panel-btn')
   .addEventListener('click', () => {
      console.log('click');
      document.querySelector('.header-adaptive__menu')
      .classList.toggle('hide')
   })

}