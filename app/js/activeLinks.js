let options = {
    rootMargin: "100px",
    threshold: 0.35,
};

const ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target.id == "home" && entry.isIntersecting) {
            homeNav.classList.add("active");
            projectsNav.classList.remove("active");
            contactNav.classList.remove("active");

            homeSide.classList.add("active");
            projectsSide.classList.remove("active");
            contactSide.classList.remove("active");
        } else if (entry.target.id == "projects" && entry.isIntersecting) {
            projectsNav.classList.add("active");
            homeNav.classList.remove("active");
            contactNav.classList.remove("active");

            projectsSide.classList.add("active");
            homeSide.classList.remove("active");
            contactSide.classList.remove("active");
        } else if (entry.target.id == "contact" && entry.isIntersecting) {
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
