export const motivationSlider = () => {
    setInterval(slide, 10000);
};

const motivationCards = document.querySelectorAll(".motivation__card");
const slide = () => {
    for (const motivationCard of motivationCards) {
        motivationCard.classList.toggle("slide__out");
        
    }
    setTimeout(()=>{
        for (const motivationCard of motivationCards) {
            motivationCard.classList.toggle("display-none");
        }
    },2000)
    setTimeout(()=>{
        for (const motivationCard of motivationCards) {
            motivationCard.classList.toggle("slide__out");
        }
    },3000)
    
};
