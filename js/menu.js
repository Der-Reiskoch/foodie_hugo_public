"use strict";(function(t){var i=t.querySelector(".menu__btn"),o=t.querySelector(".menu__list");function a(){o.classList.toggle("menu__list--active"),o.classList.toggle("menu__list--transition"),this.classList.toggle("menu__btn--active"),this.setAttribute("aria-expanded",this.getAttribute("aria-expanded")==="true"?"false":"true")}function r(){this.classList.remove("menu__list--transition")}i&&o&&(i.addEventListener("click",a,!1),o.addEventListener("transitionend",r,!1))})(document,window)