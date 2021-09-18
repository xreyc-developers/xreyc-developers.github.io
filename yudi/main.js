import { login } from './modules/login/login.js';

const APP = (function() {
  document.addEventListener('DOMContentLoaded',init);
  function init() {
    addEventListeners();
  }
  function addEventListeners() {
    const selectBtn = document.querySelectorAll('button');
    for(let i = 0; i < selectBtn.length; i++) {
      selectBtn[i].addEventListener('click', (e) => {
        e.preventDefault()
        login(i);
      })
    }
  }
})()
