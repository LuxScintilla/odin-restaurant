import "./style.css";
import createHome from "./home-page.js";
import createMenu from "./menu-page.js";
import createBooking from "./booking-page.js";
import odinLogo from "./img/odin-logo.png";
import cutleryLogo from "./img/cutlery-logo.png";

const header = document.querySelector(".header-content");
const content = document.querySelector(".content");
const footer = document.querySelector("footer");

function createNav() {
  const nav = document.createElement("nav");
  const navGroup = document.createElement("div");
  navGroup.classList.add("nav-group");

  const logo = document.createElement("img");
  logo.src = odinLogo;
  logo.classList.add("logo");

  const logoTitle = document.createElement("h1");
  logoTitle.textContent = "Odin Cuisine";
  logoTitle.classList.add("logo-title");

  navGroup.appendChild(logo);
  navGroup.appendChild(logoTitle);
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

  const cutlery = document.createElement("img");
  cutlery.src = cutleryLogo;
  cutlery.classList.add("cutlery");

  header.appendChild(cutlery);
}

function createFooter() {
  const projectContent = document.createElement("section");
  projectContent.classList.add("project-content");
  footer.appendChild(projectContent);

  const projectLeft = document.createElement("div");
  projectLeft.classList.add("project-left");
  projectContent.appendChild(projectLeft);

  const madeBy = document.createElement("h3");
  madeBy.textContent = "Ekaterina Furman";
  madeBy.classList.add("madeBy");
  projectLeft.appendChild(madeBy);

  const projectOdin = document.createElement("p");
  projectOdin.textContent = "The Odin Project";
  projectOdin.classList.add("project");
  projectLeft.appendChild(projectOdin);

  const projectName = document.createElement("p");
  projectName.textContent = "JavaScript Project: Restaurant Page";
  projectName.classList.add("project");
  projectLeft.appendChild(projectName);

  const projectRight = document.createElement("div");
  projectRight.classList.add("project-right");
  projectContent.appendChild(projectRight);

  const gitHubButton = document.createElement("a");
  gitHubButton.textContent = "My GitHub";
  gitHubButton.setAttribute("href", "https://github.com/LuxScintilla");
  gitHubButton.classList.add("github-button");
  projectRight.appendChild(gitHubButton);
}

createNav();
createHero();
createHome();
createFooter();
