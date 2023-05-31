import welcomeIMG from "./img/wine-salad-pasta.jpg";

const content = document.querySelector(".content");

export default function createHome() {
  const welcomeWrap = document.createElement("section");
  welcomeWrap.classList.add("welcome-wrap");

  const welcomeContent = document.createElement("div");
  welcomeContent.classList.add("welcome-content");
  welcomeWrap.appendChild(welcomeContent);

  const welcomeTextGroup = document.createElement("div");
  welcomeTextGroup.classList.add("welcome-text-group");
  welcomeContent.appendChild(welcomeTextGroup);

  const welcomeTitle = document.createElement("h3");
  welcomeTitle.textContent = "Our Story";
  welcomeTitle.classList.add("welcome-title");
  welcomeTextGroup.appendChild(welcomeTitle);

  const welcomeSub = document.createElement("p");
  welcomeSub.textContent = "Begins";
  welcomeSub.classList.add("welcome-sub");
  welcomeTextGroup.appendChild(welcomeSub);

  const welcomeStory = document.createElement("p");
  welcomeStory.textContent =
    "Our legendary cuisine is unmatched. Sit among the gods themselves and taste our many specialities on offer. You will lose yourself in our mythical atmosphere, with many honoured guests. Book your visit now!";
  welcomeStory.classList.add("welcome-story");
  welcomeTextGroup.appendChild(welcomeStory);

  const welcomeImage = document.createElement("img");
  welcomeImage.src = welcomeIMG;
  welcomeImage.classList.add("welcome-image");
  welcomeContent.appendChild(welcomeImage);

  content.appendChild(welcomeWrap);
}
