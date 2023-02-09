// Crea una función que muestre los nombres de los usuarios que tenemos en la lista
const userList = [
  { name: 'Jon' },
  { name: 'Carmen' },
  { name: 'Maria' },
];

const showUserNames = (name) => {
// 👇🏻 Añade tu lógica aquí
  userList.forEach(function(name) {
    console.log(name);
  });
  // 👆🏻
};

showUserNames(userList);
