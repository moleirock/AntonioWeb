const head = document.getElementById("head");

const wheelScroll = () => {
    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            head.style.transform = "translateY(-100%)";
        } else if (e.deltaY < 0) {
            head.style.transform = "unset";
        }
    });
};

const swipeScroll = () => {
    let lastClientY = 0;
    document.addEventListener("touchmove", (e) => {
        let currentClientY = e.changedTouches[0].clientY - lastClientY;
        lastClientY = e.changedTouches[0].clientY;
        if (currentClientY < 0) {
            head.style.transform = "translateY(-100%)";
        } else if (currentClientY > 0) {
            head.style.transform = "unset";
        }
    });
};

export const hideHead = () => {
    wheelScroll();
    swipeScroll();
};
