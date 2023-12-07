if ('scrollBehavior' in document.documentElement.style === false) {
    const anchors = document.querySelectorAll('a[href^="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const topOffset = targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });
            }
        });
    }
}