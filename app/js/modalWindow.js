export const modalWindows = () => {
    openCloseWindow(btnAbout, about);
    openCloseWindow(btnProject1, project1);
    openCloseWindow(btnProject2, project2);
    openCloseWindow(btnProject3, project3);
};

function openCloseWindow(button, element) {
    button.addEventListener("click", () => {
        element.classList.toggle("display-none");
    });
    element.addEventListener("click", () => {
        element.classList.toggle("display-none");
    });
}
