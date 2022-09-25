import {hideHead} from "./hideHead.js";
import {aboutMe} from "./about.js";
import {motivationSlider} from "./motivationSlider.js"
import {toggleMenu} from './btnMenu.js'
const html = document.querySelector("html");
hideHead();
toggleMenu();
if (html.dataset.document=="index"){
aboutMe();
motivationSlider();
}
