import "./style.css";
import createHome from "./home-page.js";
import createMenu from "./menu-page.js";
import createBooking from "./booking-page.js";

const nav = document.querySelector("nav");
const content = document.querySelector(".content");
const footer = document.querySelector("footer");

function createNav() {
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

function createFooter() {
  const madeBy = document.createElement("p");
  madeBy.textContent = "Odin Restaurant Page Made By Ekaterina Furman";
  footer.appendChild(madeBy);
}

createNav();
createHome();
createFooter();
