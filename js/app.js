// FADE

const fadeEl = document.querySelector(".fade");
let hasscrolled = false;

// listening event
window.addEventListener("scroll", () => {
  if (!hasscrolled) {
    fadeEl.style.opacity = 0.5;
    hasscrolled = true;
  }
});

// filters
const filterEl = document.querySelector(".filter");

const ProjectEl1 = document.querySelector(".project:nth-child(1)");
const ProjectEl2 = document.querySelector(".project:nth-child(2)");
const ProjectEl3 = document.querySelector(".project:nth-child(3)");
const ProjectEl4 = document.querySelector(".project:nth-child(4)");
const ProjectEl5 = document.querySelector(".project:nth-child(5)");
const ProjectEl6 = document.querySelector(".project:nth-child(6)");
const htmlEl = document.querySelector("html");

filterEl.addEventListener("click", (e) => {
  // removing fade
  fadeEl.style.opacity = 0;

  // enabling clicked button active
  document.querySelector(".filter-btn-active").classList.remove("filter-btn-active");
  e.target.classList.add("filter-btn-active");

  // changing image opacity
  htmlEl.style.setProperty("--default-opacity", 0.4);
  htmlEl.style.setProperty("--hover-opacity", 0.3);

  // grid section
  const filtertext = e.target.textContent;
  if (filtertext === "All") {
    ProjectEl1.style.opacity = 1;
    ProjectEl1.style.transform = "scale(1)";
    ProjectEl2.style.opacity = 1;
    ProjectEl2.style.transform = "scale(1)";
    ProjectEl3.style.opacity = 1;
    ProjectEl3.style.transform = "scale(1)";
    ProjectEl4.style.opacity = 1;
    ProjectEl4.style.transform = "scale(1)";
    ProjectEl5.style.opacity = 1;
    ProjectEl5.style.transform = "scale(1)";
    ProjectEl6.style.opacity = 1;
    ProjectEl6.style.transform = "scale(1)";
  } else if (filtertext === "FrontEnd") {
    ProjectEl1.style.opacity = 0;
    ProjectEl1.style.transform = "scale(0)";
    ProjectEl2.style.opacity = 0;
    ProjectEl2.style.transform = "scale(0)";
    ProjectEl3.style.opacity = 0;
    ProjectEl3.style.transform = "scale(0)";
    ProjectEl6.style.opacity = 0;
    ProjectEl6.style.transform = "scale(0)";

    ProjectEl4.style.transform = "translate(325px, -200px)";
    ProjectEl5.style.transform = "translate(-325px, -200px)";
  } else if (filtertext === "BackEnd") {
    ProjectEl1.style.opacity = 0;
    ProjectEl1.style.transform = "scale(0)";
    ProjectEl2.style.opacity = 0;
    ProjectEl2.style.transform = "scale(0)";
    ProjectEl3.style.opacity = 0;
    ProjectEl3.style.transform = "scale(0)";
    // ProjectEl4.style.opacity = 0;
    ProjectEl4.style.transform = "scale(0)";
    // ProjectEl5.style.opacity = 0;
    ProjectEl5.style.transform = "scale(0)";

    ProjectEl4.style.opacity = 1;
    ProjectEl5.style.opacity = 1;
    ProjectEl6.style.transform = "translate(-300px, -150px)";
    ProjectEl6.style.opacity = 1;
  } else if (filtertext === "FullStack") {
  }
});
