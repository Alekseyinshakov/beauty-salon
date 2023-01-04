import * as flsFunctions from "./modules/functions.js";
import { headerAnimate } from "./modules/header-animate.js";
import { topScroll } from "./modules/top-scroll.js";
import { servicesScroll } from "./modules/services-scroll.js";
import mixitup from 'mixitup';



window.onload = function () {



   flsFunctions.isWebp();
   headerAnimate()
   topScroll()
   servicesScroll()
   var mixer = mixitup('.our-work__container', {
      load: {
         filter: '.category-b'
     },
     animation: {
      duration: 1000
  }
   });

};





