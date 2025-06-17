// ce sont des raccourcis !
const addButton = document.querySelector("#addButton");
const subButton = document.querySelector("#subButton");
const resetButton = document.querySelector("#resetButton");
const counter = document.querySelector("#counter");


let total = 0;

addButton.addEventListener("click", () => {
    counter.innerText = total += 1;
    // équivalent à document.querySelector("#counter").innerText = total += 1;
});
subButton.addEventListener("click", () => {
    counter.innerText = total -= 1;
});
resetButton.addEventListener("click", () => {
    counter.innerText = total = 0;
});

//merci Xinshu