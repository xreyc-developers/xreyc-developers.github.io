import { logoutUser, checkAuth } from '../../modules/firebase/login/userAuth.js';
import { createProject } from '../../modules/firebase/projects/createProject.js';
import { getAllProjects } from '../../modules/firebase/projects/getProjects.js';
import { getAllUsers } from '../../modules/firebase/users/getUsers.js';
import { getMonthByIndex } from '../../modules/static/Date.js';
window.logoutUser = logoutUser;

const APP = (function() {
  document.addEventListener('DOMContentLoaded',init);
  // INITIALIZE APPLICATION
  function init() {
    // CHECK AUTHENTICATION
    checkAuth();
    // ADD EVENT
    addEventListeners();
    // GET DATA PREPARATION
    loadInitialUsers();
    loadInitialProjects();
  }
  // ADD EVENT LISTENERS
  function addEventListeners() {}
  // LOAD INITIAL USERS
  async function loadInitialUsers() {
    const userContentRows = document.querySelector("div.yudi-users");
    const data = await getAllUsers();
    let rows = '';
    data.forEach((doc) => {
      const rowData = doc.data();
      rows += `<a><img src="${rowData.profileURL}"></a>`;
    });
    userContentRows.innerHTML = rows;
  }
  // LOAD INITIAL PROJECTS
  async function loadInitialProjects() {
    const projectContentRows = document.querySelector("#projectContentRows");
    const data = await getAllProjects();
    let rows = '';
    data.forEach((doc) => {
      const rowData = doc.data();
      const createdOn = new Date(rowData.createdOn.toDate());
      const updatedOn = new Date(rowData.updatedOn.toDate());
      rows += `
        <div class="row yudi-table yudi-table-row" id="${doc.id}">
          <div class="col-md-3">${rowData.name}</div>
          <div class="col-md-3">${getMonthByIndex(createdOn.getMonth())} ${createdOn.getDate()}, ${createdOn.getFullYear()}</div>
          <div class="col-md-3">${getMonthByIndex(updatedOn.getMonth())} ${updatedOn.getDate()}, ${updatedOn.getFullYear()}</div>
          <div class="col-md-3">
            ${rowData.status}
            <i class="fas fa-ellipsis-h yudi-table-menu"></i>
          </div>
        </div>`;
    });
    projectContentRows.innerHTML = rows;
  }

})()
