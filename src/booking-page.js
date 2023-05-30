const content = document.querySelector(".content");

export default function createBooking() {
  const welcome = document.createElement("p");
  welcome.textContent = "Welcome to the Booking Page!";
  content.appendChild(welcome);
}
