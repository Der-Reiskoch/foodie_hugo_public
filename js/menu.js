'use strict';(function(b){var c=b.querySelector('.menu__btn'),a=b.querySelector('.menu__list');function d(){a.classList.toggle('menu__list--active'),a.classList.toggle('menu__list--transition'),this.classList.toggle('menu__btn--active'),this.setAttribute('aria-expanded',this.getAttribute('aria-expanded')==='true'?'false':'true')}function e(){this.classList.remove('menu__list--transition')}c&&a&&(c.addEventListener('click',d,!1),a.addEventListener('transitionend',e,!1))})(document,window)