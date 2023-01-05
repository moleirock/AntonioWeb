const btnAbout = document.getElementById("btnAbout");
const about = document.getElementById("about");
const btnProject1 = document.getElementById("btnProject1");
const project1 = document.getElementById("project1");
const btnProject2 = document.getElementById("btnProject2");
const project2 = document.getElementById("project2");
const btnProject3 = document.getElementById("btnProject3");
const project3 = document.getElementById("project3");



function openCloseWindow(button, element) {
    button.addEventListener("click", () => {
        element.classList.toggle("display-none");
    });
    element.addEventListener("click", () => {
        element.classList.toggle("display-none");
    });
}

export const modalWindows = () => {
    openCloseWindow(btnAbout, about);
    openCloseWindow(btnProject1, project1);
    openCloseWindow(btnProject2, project2);
    openCloseWindow(btnProject3, project3);
};