const btnMenu = document.getElementById("btnMenu");
const sideOverlay = document.getElementById("sideOverlay");
const sideNav = document.getElementById("sideNav");




export const toggleMenu = ()=>{
    btnMenu.addEventListener('click',()=>{
        sideOverlay.classList.toggle("display-none");
        setTimeout(()=>{
            sideNav.classList.toggle("slide__out");
        },20)
    })
    sideOverlay.addEventListener('click',()=>{
        sideNav.classList.toggle("slide__out");
        setTimeout(()=>{
            sideOverlay.classList.toggle("display-none");
        },300)
    })
}