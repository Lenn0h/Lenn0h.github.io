window.addEventListener("scroll", () => {
    const text = document.querySelector(".scroll-animation");
    const textPosition = text.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (textPosition < screenHeight) {
        text.style.opacity = 1;
        text.style.transform = "translateY(0)";
    }
}); 


window.addEventListener("scroll", () => {
    const headings = document.querySelectorAll(".scroll-animation--heading");
    const screenHeight = window.innerHeight;

    headings.forEach((heading) => {
        const headingPosition = heading.getBoundingClientRect().top;
        if (headingPosition < screenHeight) {
            heading.style.opacity = 1;
            heading.style.transform = "translateY(0)";
        }
    });
});

window.addEventListener("scroll", () => {
    const headings = document.querySelectorAll(".scroll-animation--heading_variante");
    const screenHeight = window.innerHeight;

    headings.forEach((heading) => {
        const headingPosition = heading.getBoundingClientRect().top;
        if (headingPosition < screenHeight) {
            heading.style.opacity = 1;
            heading.style.transform = "translateX(0)";
        }
    });
}); 

