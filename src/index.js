import "./style.css";
import createHome from "./home-page.js";
import createMenu from "./menu-page.js";
import createBooking from "./booking-page.js";

const header = document.querySelector(".header-content");
const content = document.querySelector(".content");
const footer = document.querySelector("footer");

function createNav() {
  const nav = document.createElement("nav");
  const navGroup = document.createElement("div");
  navGroup.classList.add("nav-group");
  const titleLogo = document.createElement("h1");
  titleLogo.textContent = "Odin Cuisine";
  titleLogo.classList.add("logo");
  navGroup.appendChild(titleLogo);
  navGroup.appendChild(nav);
  header.appendChild(navGroup);

  const homeTab = document.createElement("div");
  homeTab.textContent = "Home";
  homeTab.classList.add("nav-item");
  nav.appendChild(homeTab);
  homeTab.addEventListener("click", function () {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    createHome();
  });

  const menuTab = document.createElement("div");
  menuTab.textContent = "Menu";
  menuTab.classList.add("nav-item");
  nav.appendChild(menuTab);
  menuTab.addEventListener("click", function () {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    createMenu();
  });

  const bookingTab = document.createElement("div");
  bookingTab.textContent = "Booking";
  bookingTab.classList.add("nav-item");
  nav.appendChild(bookingTab);
  bookingTab.addEventListener("click", function () {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    createBooking();
  });
}

function createHero() {
  const heroText = document.createElement("h2");
  heroText.textContent = "Legendary Specialities";
  heroText.classList.add("hero-text");
  const heroSubText = document.createElement("p");
  heroSubText.textContent = "In the heart of Valhalla";
  heroSubText.classList.add("hero-sub-text");
  header.append(heroText, heroSubText);
}

function createFooter() {
  const madeBy = document.createElement("p");
  madeBy.textContent = "Odin Restaurant Page Made By Ekaterina Furman";
  madeBy.classList.add("made-by");
  footer.appendChild(madeBy);
}

createNav();
createHero();
createHome();
createFooter();
