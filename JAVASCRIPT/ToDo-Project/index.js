console.log("Welcome to my todo app");

let todoDataSection = document.getElementById("todo-data")
function addTodo(todoData) {
    let rowDiv = document.createElement("div");
    let todoItem = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoActions = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton = document.createElement("button");
    let hr = document.createElement("hr");

    todoNumber.textContent = "1";
    todoDetail.textContent = todoData; // sets the todo text send from input element
    todoStatus.textContent = "In progress";
    deleteButton.textContent = "Delete";
    finishedButton.textContent = "Finished";

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);
    
    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataSection.appendChild(rowDiv);
}






// Event references
// let getTodosButton = document.getElementById('get-todos');
// // registration of event listner
// // getTodosButton.addEventListener("click", () => {
// //     console.log("clicked");
// // });

// // getTodosButton.onclick = () => {
// //     console.log("clicked");
// // }

// function clickBtn() {
//     console.log("clicked");
// }