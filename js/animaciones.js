document.addEventListener("DOMContentLoaded", () => {
    const izquierda_fondo = document.getElementById("izquierda_fondo");
    const derecha_fondo = document.getElementById("derecha_fondo");
    const fondoNegro = document.getElementById("fondo_negro");

    const tl = gsap.timeline();

    tl.from(izquierda_fondo, {
        xPercent: -100,
        duration: 1,
        ease: "power3.inOut"
    }).from(derecha_fondo, {
        xPercent: 100,
        duration: 1,
        ease: "power3.inOut"
    }, "<").set(fondoNegro, {
        display: "none"
    })


    const flecha_nav = document.getElementById("flecha_nav");
    const header_pagina = document.getElementById("header_pagina");
    const menuTimeline = gsap.timeline({ paused: true, reversed: true });
    menuTimeline
        .to(header_pagina, {
            xPercent: 85,
            duration: 0.6,
            ease: "power3.inOut"
        })
        .to(flecha_nav, {
            rotate: 180,
            duration: 0.6,
            ease: "power3.inOut"
        }, "<");

    flecha_nav.addEventListener("click", () => {
        menuTimeline.reversed() ? menuTimeline.play() : menuTimeline.reverse();
    });
});
