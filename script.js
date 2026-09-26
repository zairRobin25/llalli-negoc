/* =====================================================
   MENÚ MOBILE
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("show");

            const icon = menuBtn.querySelector("i");
            if (icon) {
                if (navMenu.classList.contains("show")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });
    }

    /* =====================================================
       CERRAR MENÚ AL HACER CLIC EN UN ENLACE
    ===================================================== */
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu) {
                navMenu.classList.remove("show");
                const menuBtn = document.getElementById("menuBtn");
                if (menuBtn) {
                    const icon = menuBtn.querySelector("i");
                    if (icon) {
                        icon.classList.remove("fa-xmark");
                        icon.classList.add("fa-bars");
                    }
                }
            }
        });
    });

    /* =====================================================
       ANIMACIÓN AL HACER SCROLL
    ===================================================== */
    const animatedElements = document.querySelectorAll(
        ".card, .project-card, .course-card, .service-card, .timeline-item"
    );

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            },
            { threshold: 0.1 }
        );

        animatedElements.forEach(element => {
            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition = "all .7s ease";
            observer.observe(element);
        });
    }
});