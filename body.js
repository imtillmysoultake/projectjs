let addTodoButton = document.getElementById('addTodo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');


// console.log('LOCALSTOR:::', localStorage, rows)
const loadLocalStorage = () => {
    const rows = JSON.parse(localStorage.rows);
    toDoContainer.innerHTML = "";
    rows.map(({text, isChecked, id}) => {
        let div = document.createElement('div');
        div.append(text);
        div.id = id;
        toDoContainer.append(div);

        let newElement = {};
        const form = document.querySelector('div');
        const ls = localStorage;

        form.addEventListener('addTodo', function (event) {
            newElement[event.target.name] = event.target.value;
            ls.setItem('newElement', JSON.stringify(newElement));
        });



        if (isChecked) {
            div.style.textDecoration = 'line-through';
        }

        div.addEventListener('click', function () {
            div.style.textDecoration = 'line-through';
        })
        div.addEventListener('dblclick', function () {
            const rows = JSON.parse(localStorage.rows);
            Number(div.id);

            const filter =  rows.filter(() => {
                
            })
        })
    })
}

loadLocalStorage();

document.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode === 13) {
        const rows = JSON.parse(localStorage.rows);
        const rowsId = JSON.parse(localStorage.rowsId) + 1;

        rows.push({
            id: rowsId,
            text: inputField.value,
            isChecked: false,
        })

        localStorage.setItem('rows', JSON.stringify(rows))
        localStorage.setItem('rowsId', JSON.stringify(rowsId))

        loadLocalStorage();

    }
});


// const itemsArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) :
//     []
//
// console.log(itemsArr)
//
// function display() {
//     let items = ''
//
//     for (let i = 0; i < itemsArr; i++) {
//         document.querySelector('addTodo')
//     }
// }
// function createElement(btn) {
//     itemsArr.push(item.value)
//     localStorage.setItem('items', JSON.stringify(itemsArr))
//     location.reload()
//
// }
































// const allTasks = document.querySelector('div');
// const delAll = document.getElementById('div');


// let div2 = document.createElement('div')
// div2.append('text 2');
// toDoContainer.append(div2);
//
// let div3 = document.createElement('div')
// div3.append('text 3');
// toDoContainer.append(div3);


// function jsonText() {
//     const json = {
//         rows: [
//             {
//                 text: 'text1',
//                 isChecked: false,
//             },
//             {
//                 text: 'text2',
//                 isChecked: true,
//             },
//             {
//                 text: 'text3',
//                 isChecked: false,
//             }
//         ]
//     }
// }

// localStorage.setItem('rows', JSON.stringify(json.rows));


// for (let i = 0; i < json.length; i++) {
//     div2 = div[i];
//     div3 = div[i];
//     const divElement = document.createElement('div');
//     divElement.textContent = div2, div3;
//     document.getElementById('div').appendChild(divElement);
// }

// let addTodoButton = document.getElementById('addTodo');
// let inputField = document.getElementById('inputField');

//     function loadNotes() {
//         let storage = JSON.parse(localStorage.getItem('del-all-tasks-button'));
//
//         if (!storage) {
//             storage = [];
//             localStorage.setItem('del-all-tasks-button', JSON.stringify(storage));
//         }
//
//         function removeAll() {
//             let storage1 = JSON.parse(localStorage.getItem('del-all-tasks-button'));
//             storage1.length = 0;
//             localStorage.setItem('del-all-tasks-button', JSON.stringify(storage1));
//             loadNotes();
//         }
//
//     }
//
// }



