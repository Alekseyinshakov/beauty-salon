import * as flsFunctions from "./modules/functions.js";
import { headerAnimate } from "./modules/header-animate.js";
import { topScroll } from "./modules/top-scroll.js";
import { servicesScroll } from "./modules/services-scroll.js";



window.onload = function () {
   flsFunctions.isWebp();
   headerAnimate()
   topScroll()
   servicesScroll()

};





