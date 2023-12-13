// let list = localStorage.setItem('toDoContainer');
// let newList = [];
//
// if (list !=='' && list !== null) {
//     newList = JSON.parse(list);
// }
// console.log(newList)












// function readUser() {
//     const userJSON = localStorage.getItem('div')
//
//     if (userJSON === null) {
//         return null
//     }
//
//     // Если вдруг в хранилище оказался невалидный JSON предохраняемся от этого
//     try {
//         return JSON.parse(userJSON)
//     } catch (e) {
//         localStorage.removeItem('div')
//         return undefined
//     }
// }
//
// console.log(readUser())

























// export default class LocalStorage {
// export default class LocalStorage {
//
//     create(data) {
//         this.tasks.push(data);
//
//         localStorage.setItem('tasks', JSON.stringify(this.tasks));
//         }
//     }
// export default class LocalStorage {
//
//     create(data) {
//         data.token = this.token;
//
//     }
//
//     getIndexByToken(token) {
//         for (let i = 0; i < this.tasks.length; i++) {
//             if (this.tasks[i].token === token) {
//                 return i;
//             }
//         }
//
//         return -1;
//     }
//
//     get token() {
//         return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//     }
// }
// export default class LocalStorage {
//     //...
//
//     update(data) {
//         let index = this.getIndexByToken(data.token);
//
//         if (index !== -1) {
//             this.tasks[index] = data;
//
//             localStorage.setItem('tasks', JSON.stringify(this.tasks));
//         }
//     }
//
//     delete(data) {
//         let index = this.getIndexByToken(data.token);
//
//         if (index !== -1) {
//             this.tasks.splice(index, 1);
//
//             localStorage.setItem('tasks', JSON.stringify(this.tasks));
//         }
//     }
// };
// //...




//
// let div = document.createElement("div");
// toDoContainer.append(div);
//     constructor() {
//         // if item by key `tasks` is not defined JSON.parse return null, so I use `or empty array`
//         this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     }
// }