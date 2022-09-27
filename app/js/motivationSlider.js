const timeInterval = 9500;
const timeTransition = 2000;
const timeTransitionDelay = 2050;

export const motivationSlider = () => {
    setInterval(slide, timeInterval);
};

const slide = () => {
    const visible = document.querySelector(".motivation__content:not(.display-none)");
    const noVisible = document.querySelector(".motivation__content.display-none");
    visible.classList.toggle("slide__out");
    noVisible.classList.toggle("slide__in");

    setTimeout(() => {
        visible.classList.toggle("display-none")
        noVisible.classList.toggle("display-none");
    }, timeTransition);
    setTimeout(() => {
        visible.classList.toggle("slide__out");
        noVisible.classList.toggle("slide__in");
    }, timeTransitionDelay);
};
