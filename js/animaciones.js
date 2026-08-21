document.addEventListener("DOMContentLoaded", () => {
    const izquierda_fondo = document.getElementById("izquierda_fondo");
    const derecha_fondo = document.getElementById("derecha_fondo");
    const fondoNegro = document.getElementById("fondo_negro");

    const tl = gsap.timeline();

    tl.from(izquierda_fondo, {
        xPercent: -100,
        duration: 1.5,
        ease: "power3.inOut"
    }).from(derecha_fondo, {
        xPercent: 100,
        duration: 1.5,
        ease: "power3.inOut"
    }, "<").set(fondoNegro, {
        display: "none"
    })
});
