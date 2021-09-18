import { logoutUser, checkAuth } from '../../modules/login/userAuth.js';

const APP = (function() {
  document.addEventListener('DOMContentLoaded',init);
  // INITIALIZE APPLICATION
  function init() {
    checkAuth();
    addEventListeners();
  }
  // ADD EVENT LISTENERS
  function addEventListeners() {}
})()
