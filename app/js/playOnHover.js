const videos = document.querySelectorAll('video');

export const playVideo = () =>{
    for(const video of videos){
        video.addEventListener("mouseover",()=>{
            video.play();
        })
        video.addEventListener("mouseleave",()=>{
            video.pause();

        })
        video.addEventListener("touchstart",()=>{
            video.play();
        })
        video.addEventListener("touchend",()=>{
            video.pause();
        })
    }

}




