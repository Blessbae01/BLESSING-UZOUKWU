const sections = document.querySelectorAll("section");

const revealSections = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom && rect.bottom > 0) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
