const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const square = document.querySelector("#square");

redButton.addEventListener("click", () => {
    square.style.backgroundColor = "lightcoral";
});
greenButton.addEventListener("click", () => {
    square.style.backgroundColor = "lightgreen";
});
blueButton.addEventListener("click", () => {
    square.style.backgroundColor = "lightblue";
});