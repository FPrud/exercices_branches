
/*// cette méthode n'est pas la bonne car j'utilisais une condition sur du CSS, ce qui est apparemment dangereux dans les cas où l'on travaille en groupe. Le CSS peut être modifié par une condition, mais il de régie pas une condition.

const hidingText = document.querySelector("#hidingText");
const actionButton = document.querySelector("#actionButton");
hidingText.style.display = "block";

actionButton.addEventListener("click", () => {
    if (hidingText.style.display === "block") {
        hidingText.style.display = "none";
    } else if (hidingText.style.display === "none") {
        hidingText.style.display = "block";
    }
});
*/

const actionButton = document.getElementById("actionButton");
const hidingText = document.getElementById("hidingText");

let userHasClicked = true;

actionButton.addEventListener("click", () => {
    if (userHasClicked === false) {
        userHasClicked = true;
        hidingText.style.display = "none";
    } else {
        userHasClicked = false;
        hidingText.style.display = "block";
    }
});