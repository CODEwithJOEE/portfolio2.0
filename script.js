// Mobile menu toggle
const navToggle = document.querySelector(".navToggle");
const navLinks = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLink");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when clicking a link (mobile)
links.forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Active link on scroll
const sections = [...document.querySelectorAll("section[id]")];

const setActiveLink = () => {
  const scrollY = window.scrollY + 120;
  let currentId = "home";

  for (const sec of sections) {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (scrollY >= top && scrollY < top + height) currentId = sec.id;
  }

  links.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`);
  });
};

window.addEventListener("scroll", setActiveLink);
setActiveLink();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: opens mail client as fallback
// Contact form: opens mail client as fallback
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const subject = data.get("subject");
  const message = data.get("message");

  // change this to your email
  const toEmail = "you@example.com";

  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
  const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;

  note.textContent = "Opening your email app to send the message…";
  window.location.href = mailto;

  form.reset();
  setTimeout(() => (note.textContent = ""), 4000);
});
