gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ══════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════ */
const cursor     = document.getElementById("cursor");
const cursorBlur = document.getElementById("cursor-blur");

window.addEventListener("mousemove", (e) => {
  cursor.style.left     = e.clientX + "px";
  cursor.style.top      = e.clientY  + "px";
  cursorBlur.style.left = e.clientX + "px";
  cursorBlur.style.top  = e.clientY  + "px";
});

// scale cursor on hoverable elements
document.querySelectorAll("a, button, .p3-btn, .contact-card, #nav2 h4").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(2.5)";
    cursor.style.opacity   = "0.6";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(1)";
    cursor.style.opacity   = "1";
  });
});

/* ══════════════════════════════════════
   PAGE 1 — HERO SCROLL ANIMATION
══════════════════════════════════════ */
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "+=220%",
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});

tl.to("#page1", {
  backgroundSize: "300%",
  backgroundPosition: "60% 40%",
  ease: "none",
  duration: 1
});

tl.to(".hero-text .line", {
  scale: 7,
  opacity: 0,
  ease: "none",
  transformOrigin: "center center",
  duration: 1
}, "<+=0.1");

tl.to("#page1", {
  opacity: 1,
  ease: "none",
  duration: 0.5
}, "<+=0.2");

/* ══════════════════════════════════════
   PAGE 2 — ABOUT SCROLL REVEAL
══════════════════════════════════════ */
gsap.from("#about-left h1", {
  x: -80,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#about-left",
    start: "top 75%",
  }
});

gsap.from(".about-desc", {
  x: -60,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-desc",
    start: "top 80%",
  }
});

gsap.from(".about-tags span", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-tags",
    start: "top 85%",
  }
});

gsap.from(".img-frame", {
  x: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#gallery",
    start: "top 75%",
  }
});

/* ══════════════════════════════════════
   PAGE 3 — 3D BOX TILT
══════════════════════════════════════ */
const page3 = document.querySelector("#page3");
const box   = document.querySelector(".p3-box");

page3.addEventListener("mousemove", (e) => {
  const rect   = box.getBoundingClientRect();
  const boxX   = rect.left + rect.width  / 2;
  const boxY   = rect.top  + rect.height / 2;
  const deltaX = e.clientX - boxX;
  const deltaY = e.clientY - boxY;
  const rotX   = (-deltaY / rect.height) * 15;
  const rotY   = ( deltaX / rect.width)  * 15;
  box.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});

page3.addEventListener("mouseleave", () => {
  box.style.transform = "rotateX(0deg) rotateY(0deg)";
});

/* ══════════════════════════════════════
   PAGE 3 — BOX SCROLL REVEAL
══════════════════════════════════════ */
gsap.from(".p3-box", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#page3",
    start: "top 60%",
  }
});

/* ══════════════════════════════════════
   PAGE 4 — CONTACT REVEAL
══════════════════════════════════════ */
/* ══════════════════════════════════════
   PAGE 4 — CONTACT (no animation, always visible)
══════════════════════════════════════ */
// contact cards are always visible - no scroll animation needed

/* ══════════════════════════════════════
   NAV SMOOTH SCROLL
══════════════════════════════════════ */
document.querySelector("#aboutBtn").addEventListener("click", (e) => {
  e.preventDefault();
  gsap.to(window, { duration: 1.2, scrollTo: "#page2", ease: "power2.inOut" });
});

document.querySelector("#projectBtn").addEventListener("click", (e) => {
  e.preventDefault();
  gsap.to(window, { duration: 1.2, scrollTo: "#page3", ease: "power2.inOut" });
});

document.querySelector("#contactBtn").addEventListener("click", (e) => {
  e.preventDefault();
  gsap.to(window, { duration: 1.2, scrollTo: "#page4", ease: "power2.inOut" });
});

/* ══════════════════════════════════════
   GALLERY AUTO-SLIDE
══════════════════════════════════════ */
const images = [
  "gallery/img1.jpeg",
  "gallery/img2.jpeg",
  "gallery/img3.jpeg",
  "gallery/img4.jpeg",
  "gallery/img5.jpeg",
  "gallery/img6.jpeg",
  "gallery/img7.jpeg",
  "gallery/img8.jpeg",
  "gallery/img9.jpeg",
  "gallery/img10.jpeg"
];

let index = 0;
const galleryImg  = document.getElementById("gallery-img");
const imgIndexEl  = document.getElementById("img-index");

setInterval(() => {
  index = (index + 1) % images.length;
  galleryImg.style.opacity = "0";

  setTimeout(() => {
    galleryImg.src = images[index];
    galleryImg.style.opacity = "1";
    imgIndexEl.textContent = String(index + 1).padStart(2, "0");
  }, 400);
}, 2000);
