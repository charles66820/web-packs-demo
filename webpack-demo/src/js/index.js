// import * as s from "../scss/style.scss";
import "../scss/style.scss";
import Icon from "../img/icon.png";
import { printMe, test} from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello webpack";
  element.classList.add("truc");

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  // btn.onclick = test;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());