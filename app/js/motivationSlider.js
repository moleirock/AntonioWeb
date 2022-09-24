export const motivationSlider = () => {
    setInterval(slide, 9500);
};

const slide = () => {
    const visible = document.querySelector(".motivation__content:not(.display-none)");
    const noVisible = document.querySelector(".motivation__content.display-none");
    visible.classList.toggle("slide__out");
    noVisible.classList.toggle("slide__in");

    setTimeout(() => {
        visible.classList.toggle("display-none")
        noVisible.classList.toggle("display-none");
    }, 2000);
    setTimeout(() => {
        visible.classList.toggle("slide__out");
        noVisible.classList.toggle("slide__in");
    }, 2100);
};
