import { getAllProjects } from '../../modules/firebase/projects/getProjects.js';
import { getMonthByIndex } from '../../modules/static/Date.js';

// INITIAL PROJECTS
export async function loadProjects(cb) {
  const projectItems = document.querySelector("#projectContentRows");
  const data = await getAllProjects();
  const projectIds = [];
  let items = '';
  data.forEach((doc) => {
    const rowData = doc.data();
    const createdOn = new Date(rowData.createdOn.toDate());
    const updatedOn = new Date(rowData.updatedOn.toDate());
    items += `
      <div class="row yudi-table yudi-table-row" id="${doc.id}">
        <div class="col-md-3">${rowData.name}</div>
        <div class="col-md-3">${getMonthByIndex(createdOn.getMonth())} ${createdOn.getDate()}, ${createdOn.getFullYear()}</div>
        <div class="col-md-3">${getMonthByIndex(updatedOn.getMonth())} ${updatedOn.getDate()}, ${updatedOn.getFullYear()}</div>
        <div class="col-md-3">
          ${rowData.status}
          <i class="fas fa-ellipsis-h yudi-table-menu"></i>
        </div>
      </div>`;
    projectIds.push(doc.id);
  });
  projectItems.innerHTML = items;
  cb(projectIds);
}
