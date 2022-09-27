import {hideHead} from "./hideHead.js";
import {aboutMe} from "./about.js";
import {motivationSlider} from "./motivationSlider.js"
import {toggleMenu} from './btnMenu.js'
import { playOnHover } from "./playOnHover.js";
const html = document.querySelector("html");
hideHead();
toggleMenu();
playOnHover();
if (html.dataset.document=="index"){
aboutMe();
motivationSlider();
}else if(html.dataset.document=="projects"){

}
