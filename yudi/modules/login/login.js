export function login(id) {
  fetch('./modules/login/users.json')
    .then((data) => {
      return data.json();
    })
    .then((users) => {
      console.log(users[id]);
    })
    .catch((err) => {
      console.log("Something went wrong.");
    })
}
