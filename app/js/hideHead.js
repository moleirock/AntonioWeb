export const hideHead = () => {
    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            head.style.transform = "translateY(-101%)";
        } else if (e.deltaY < 0) {
            head.style.transform = "unset";
        }
    });
};
