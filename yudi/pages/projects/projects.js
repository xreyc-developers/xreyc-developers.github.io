// SERVER REQUEST
import { logoutUser, checkAuth } from '../../modules/firebase/login/userAuth.js';
import { createProject } from '../../modules/firebase/projects/createProject.js';
// COMPONENTS
import { loadUsers } from '../../components/users/users_top_list.js';
import { loadProjects } from '../../components/projects/projects_tables.js';

const APP = (function() {
  document.addEventListener('DOMContentLoaded',init);
  // INITIALIZE APPLICATION
  function init() {
    // CHECK AUTHENTICATION
    checkAuth();
    // EVENT LISTENERS
    addEventListeners();
    // GET DATA PREPARATION
    loadUsers(addUserEventListeners);
    loadProjects(addProjectEventListeners);
  }

  // ADD EVENT LISTENERS
  function addEventListeners() {
    document.querySelector('#logoutBtn').addEventListener('click', () => {
      logoutUser();
    })
  }

  // USER EVENT LISTENER
  function addUserEventListeners(userList) {
    for (let i = 0; i < userList.length; i++) {
      const userEl = document.getElementById(userList[i]);
      userEl.addEventListener('click', () => {
        loadProjects(addProjectEventListeners);
      });
    }
  }

  // PROJECT EVENT LISTENERS
  function addProjectEventListeners(projectList) {
    for (let i = 0; i < projectList.length; i++) {
      const projectEl = document.getElementById(projectList[i]);
      projectEl.addEventListener('click', () => {
        console.log("PROJECT: " + projectList[i]);
      })
    }
  }
})()
