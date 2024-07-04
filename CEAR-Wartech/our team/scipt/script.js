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