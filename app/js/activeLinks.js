const homeNav = document.getElementById("homeNav");
const projectsNav = document.getElementById("projectsNav");
const contactNav = document.getElementById("contactNav");
const homeSide = document.getElementById("homeSide");
const projectsSide = document.getElementById("projectsSide");
const contactSide = document.getElementById("contactSide");
const home = document.getElementById("home");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const options = {
    rootMargin: "0px",
    threshold: 0.30,
};

const ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (home.getBoundingClientRect().y >= entry.boundingClientRect.y && entry.isIntersecting) {
            homeNav.classList.add("active");
            projectsNav.classList.remove("active");
            contactNav.classList.remove("active");

            homeSide.classList.add("active");
            projectsSide.classList.remove("active");
            contactSide.classList.remove("active");
        } else if (projects.getBoundingClientRect().y >= entry.boundingClientRect.y && entry.isIntersecting) {
            projectsNav.classList.add("active");
            homeNav.classList.remove("active");
            contactNav.classList.remove("active");

            projectsSide.classList.add("active");
            homeSide.classList.remove("active");
            contactSide.classList.remove("active");
        } else if (contact.getBoundingClientRect().y >= entry.boundingClientRect.y && entry.isIntersecting) {
            contactNav.classList.add("active");
            homeNav.classList.remove("active");
            projectsNav.classList.remove("active");

            contactSide.classList.add("active");
            homeSide.classList.remove("active");
            projectsSide.classList.remove("active");
        }
    });
}, options);

export const turnOnLink = () => {
    ob.observe(home);
    ob.observe(projects);
    ob.observe(contact);
};
