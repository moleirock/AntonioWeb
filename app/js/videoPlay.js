const videos = document.querySelectorAll("video");
const mediaqueryList = window.matchMedia("(max-width: 768px)");

let options = {
    rootMargin: "0px",
    threshold: 1.0,
};

const ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}, options);

export const playVideo = () => {
    for (const video of videos) {
            ob.observe(video);
          
            video.addEventListener("mouseover", () => {
                video.pause();
            });
            video.addEventListener("mouseleave", () => {
                video.play();
            });
    }
};
