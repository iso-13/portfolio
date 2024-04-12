const menuBtnElm = document.querySelector(".menu-btn");
const closeMenuElm = document.querySelector(".close-menu-btn");
const sideMenuElm = document.querySelector(".side-menu");
const overlayElm = document.querySelector(".overlay");
const scrollersElms = document.querySelectorAll(".scroller-logo");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function addAnimation() {
  const innerScroller = document.querySelector(".inner-scroller");
  const innerScrollerContent = Array.from(innerScroller.children);

  innerScrollerContent.forEach((item) => {
    const duplicate = item.cloneNode(true);

    duplicate.setAttribute("aria-hidden", true);
    innerScroller.appendChild(duplicate);
  });
}

addAnimation();

menuBtnElm.addEventListener("click", () => {
  sideMenuElm.style.left = "0";
  overlayElm.style.display = "block";
});

closeMenuElm.addEventListener("click", closeMenu);

document.addEventListener(
  "click",
  (e) => {
    if (!sideMenuElm.contains(e.target)) {
      closeMenu();
    }
  },
  true
);

function closeMenu() {
  sideMenuElm.style.left = "-281px";
  overlayElm.style.display = "none";
}

function updateActiveClass() {
  sections.forEach((sec) => {
    const secTop = sec.offsetTop;
    const secHeight = sec.offsetHeight;
    const secBottom = secTop + secHeight;

    const offset = 60; // navbar height

    if (window.scrollY + offset >= secTop && scrollY < secBottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        closeMenu();
      });
      const matchingLink = document.querySelector(`a[href="#${sec.id}"]`);
      matchingLink.classList.add("active");
    }
  });
}

updateActiveClass();

window.addEventListener("scroll", updateActiveClass);
