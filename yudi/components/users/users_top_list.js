import { getAllUsers } from '../../modules/firebase/users/getUsers.js';

// RENDER USERS
export async function loadUsers(cb) {
  const userItems = document.querySelector("div.yudi-users");
  const data = await getAllUsers();
  const usersIds = [];
  let items = '';
  data.forEach((doc) => {
    const rowData = doc.data();
    items += `<a id="${doc.id}"><img src="${rowData.profileURL}"></a>`;
    usersIds.push(doc.id);
  });
  userItems.innerHTML = items;
  cb(usersIds);
}
