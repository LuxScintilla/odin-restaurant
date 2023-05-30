const content = document.querySelector(".content");

export default function createHome() {
  const welcome = document.createElement("p");
  welcome.textContent = "Welcome to the Home Page!";
  content.appendChild(welcome);
}
