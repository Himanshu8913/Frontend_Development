console.log("Welcome to my todo app");

let getTodosButton = document.getElementById('get-todos');
// registration of event listner
// getTodosButton.addEventListener("click", () => {
//     console.log("clicked");
// });

getTodosButton.onclick = () => {
    console.log("clicked");
}