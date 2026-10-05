const typing = document.getElementById("typing");
const phrases = [
  "Cybersecurity enthusiast",
  "Web Developer",
  "Ingeniero Informático en formación"
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const phrase = phrases[phraseIndex];
  typing.textContent = deleting
    ? phrase.substring(0, charIndex--)
    : phrase.substring(0, charIndex++);

  let speed = deleting ? 45 : 85;

  if (!deleting && charIndex > phrase.length) {
    deleting = true;
    speed = 1500;
  } else if (deleting && charIndex < 0) {
    deleting = false;
    charIndex = 0;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 350;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☾" : "☼";
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll("nav a").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});
