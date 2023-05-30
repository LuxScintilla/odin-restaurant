const content = document.querySelector(".content");

export default function createMenu() {
  const welcome = document.createElement("p");
  welcome.textContent = "Welcome to the Menu Page!";
  content.appendChild(welcome);
}
