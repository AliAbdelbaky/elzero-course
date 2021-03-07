import { gsap } from "gsap";
const tl = gsap.timeline({ defaults: { ease: "power1.out" } }),
    logo = document.querySelector(".info h2");
//- Animation
tl
    .fromTo(logo, { y: "100%", opacity: "0", duration: 0.5 }, { y: "0%", opacity: "1" })
console.log(logo);