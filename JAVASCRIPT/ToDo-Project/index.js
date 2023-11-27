console.log("Welcome to my todo app");

let getTodosButton = document.getElementById('get-todos');
// registration of event listner
getTodosButton.addEventListener("click", () => {
    console.log("clicked");
});

getTodosButton.addEventListener("mouseover", handler)
getTodosButton.addEventListener("mouseout", () => {
    console.log("out of button");
})

function handler() {
    console.log("mouse hovered!!!");
}