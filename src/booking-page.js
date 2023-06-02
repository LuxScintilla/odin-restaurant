const content = document.querySelector(".content");

export default function createBooking() {
  const bookingWrap = document.createElement("section");
  bookingWrap.classList.add("booking-wrap");
  content.appendChild(bookingWrap);

  const bookingContent = document.createElement("div");
  bookingContent.classList.add("booking-content");
  bookingWrap.appendChild(bookingContent);

  const bookingTitle = document.createElement("h3");
  bookingTitle.classList.add("booking-title");
  bookingTitle.textContent = "Reservations";
  bookingContent.appendChild(bookingTitle);

  const bookingSubTitle = document.createElement("p");
  bookingSubTitle.classList.add("booking-sub-title");
  bookingSubTitle.textContent = "Book Now";
  bookingContent.appendChild(bookingSubTitle);

  const bookingForm = document.createElement("form");
  bookingForm.classList.add("booking-form");
  bookingContent.appendChild(bookingForm);

  const nameLabel = document.createElement("label");
  nameLabel.classList.add("booking-label");
  nameLabel.textContent = "Your Name";
  nameLabel.setAttribute("for", "booking-name");
  bookingForm.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.classList.add("booking-input");
  nameInput.setAttribute("name", "booking-name");
  bookingForm.appendChild(nameInput);

  const numberLabel = document.createElement("label");
  numberLabel.classList.add("booking-label");
  numberLabel.textContent = "Party Size";
  numberLabel.setAttribute("for", "party-size");
  bookingForm.appendChild(numberLabel);

  const numberInput = document.createElement("input");
  numberInput.classList.add("booking-input");
  numberInput.setAttribute("type", "number");
  numberInput.setAttribute("name", "party-size");
  bookingForm.appendChild(numberInput);

  const dateLabel = document.createElement("label");
  dateLabel.classList.add("booking-label");
  dateLabel.textContent = "Date for Booking";
  dateLabel.setAttribute("for", "booking-date");
  bookingForm.appendChild(dateLabel);

  const dateInput = document.createElement("input");
  dateInput.classList.add("booking-input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "booking-date");
  bookingForm.appendChild(dateInput);

  const requestLabel = document.createElement("label");
  requestLabel.classList.add("booking-label");
  requestLabel.textContent = "Special Requests";
  requestLabel.setAttribute("for", "booking-request");
  bookingForm.appendChild(requestLabel);

  const requestInput = document.createElement("input");
  requestInput.classList.add("booking-input");
  requestInput.setAttribute("name", "booking-request");
  bookingForm.appendChild(requestInput);

  const bookingButton = document.createElement("button");
  bookingButton.classList.add("booking-button");
  bookingButton.textContent = "Book your Reservation";
  bookingButton.setAttribute("type", "submit");
  bookingForm.appendChild(bookingButton);
}
