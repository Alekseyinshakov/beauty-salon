export function ourTeamAnimate() {
   
   const teamItems = document.querySelectorAll('.our-team__item')
   
   if (document.querySelector('.our-team__item')) {
      teamItems[0].classList.add('animate__fadeInTopLeft');
      teamItems[1].classList.add('animate__fadeInDown');
      teamItems[2].classList.add('animate__fadeInTopRight');
      document.querySelector('.our-team__grid').classList.add('show')
   }
}