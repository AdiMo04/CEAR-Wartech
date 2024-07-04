function toggleNavbar() {
  const links = document.querySelector(".linksToggle");
  links.classList.toggle("show");
}

document.body.addEventListener("click", function (event) {
  const links = document.querySelector(".linksToggle");
  const toggleBtn = document.querySelector(".toggle-btn");

  if (!event.target.closest(".navbar") && event.target !== toggleBtn) {
    links.classList.remove("show");
  }
});

// Intersection Observer options
// Intersection Observer options
const options = {
  root: null, // use the viewport as the root
  rootMargin: "0px", // no margin
  threshold: 0.5, // trigger when 50% of the target is visible
};

// Callback function to handle intersection
const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the element is intersecting, add a class to it
      entry.target.classList.add("visible");
    } else {
      // If the element is not intersecting, remove the class
      entry.target.classList.remove("visible");
    }
  });
};

// Initialize Intersection Observer
const observer = new IntersectionObserver(handleIntersect, options);

// Select elements to observe
const missionSection = document.querySelector(".mission");
const visionSection = document.querySelector(".vision");
const contentParagraph = document.getElementById("content");
const aboutHeading = document.querySelector('.about-heading');

// Observe the sections
if (missionSection) {
  observer.observe(missionSection);
}

if (visionSection) {
  observer.observe(visionSection);
}

if (contentParagraph) {
  observer.observe(contentParagraph);
}

if (aboutHeading) {
  observer.observe(aboutHeading);
}
