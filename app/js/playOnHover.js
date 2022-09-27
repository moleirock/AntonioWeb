const videos = document.querySelectorAll('video');

export const playOnHover = () =>{
    for(const video of videos){
        video.addEventListener("mouseover",()=>{
            video.play();
        })
        video.addEventListener("mouseleave",()=>{
            video.pause();

        })
    }

}




