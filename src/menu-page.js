const content = document.querySelector(".content");

export default function createMenu() {
  const menuWrap = document.createElement("section");
  menuWrap.classList.add("menu-wrap");
  content.appendChild(menuWrap);

  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");
  menuWrap.appendChild(menuContent);

  const menuTitleGroup = document.createElement("div");
  menuTitleGroup.classList.add("menu-title-group");
  menuContent.appendChild(menuTitleGroup);

  const menuTitle = document.createElement("h3");
  menuTitle.textContent = "The Menus";
  menuTitle.classList.add("menu-title");
  menuTitleGroup.appendChild(menuTitle);

  const menuSubTitle = document.createElement("p");
  menuSubTitle.textContent = "Specialities";
  menuSubTitle.classList.add("menu-sub");
  menuTitleGroup.appendChild(menuSubTitle);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  menuContainer.append(
    itemRoastPork(),
    itemBeefStew(),
    itemChickenPasta(),
    itemFishPie(),
    itemBaconSoup(),
    itemBeefStroganoff(),
    itemRoastTurkey(),
    itemStirFry()
  );
  menuContent.appendChild(menuContainer);
}

function menuItem(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
}

function itemRoastPork() {
  const roastPork = new menuItem(
    "Roast Pork Shoulder",
    "Roast pork with crispy crackling, served with roast potatoes and veg",
    "£8.99"
  );
  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodTextGroup = document.createElement("div");
  foodTextGroup.classList.add("food-text-group");
  foodItem.appendChild(foodTextGroup);

  const foodName = document.createElement("p");
  foodName.classList.add("food-name");
  foodName.textContent = roastPork.name;
  foodTextGroup.appendChild(foodName);

  const foodDesc = document.createElement("p");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = roastPork.description;
  foodTextGroup.appendChild(foodDesc);

  const foodPrice = document.createElement("p");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = roastPork.price;
  foodItem.appendChild(foodPrice);

  return foodItem;
}
function itemBeefStew() {
  const beefStew = new menuItem(
    "Beef Stew",
    "A traditional braised beef casserole with thick, rich gravy and chunky veg",
    "£7.75"
  );

  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodTextGroup = document.createElement("div");
  foodTextGroup.classList.add("food-text-group");
  foodItem.appendChild(foodTextGroup);

  const foodName = document.createElement("p");
  foodName.classList.add("food-name");
  foodName.textContent = beefStew.name;
  foodTextGroup.appendChild(foodName);

  const foodDesc = document.createElement("p");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = beefStew.description;
  foodTextGroup.appendChild(foodDesc);

  const foodPrice = document.createElement("p");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = beefStew.price;
  foodItem.appendChild(foodPrice);

  return foodItem;
}

function itemChickenPasta() {
  const chickenPasta = new menuItem(
    "Chicken & Bacon Pasta",
    "chicken and bacon with ribbons of tagliatelle with creamy sauce, served with a green salad",
    "£7.99"
  );

  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodTextGroup = document.createElement("div");
  foodTextGroup.classList.add("food-text-group");
  foodItem.appendChild(foodTextGroup);

  const foodName = document.createElement("p");
  foodName.classList.add("food-name");
  foodName.textContent = chickenPasta.name;
  foodTextGroup.appendChild(foodName);

  const foodDesc = document.createElement("p");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = chickenPasta.description;
  foodTextGroup.appendChild(foodDesc);

  const foodPrice = document.createElement("p");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = chickenPasta.price;
  foodItem.appendChild(foodPrice);

  return foodItem;
}

function itemFishPie() {
  const fishPie = new menuItem(
    "Creamy Fish & Leek Pie",
    "King prawns, salmon and haddock and topped with a comforting, cheesy mash",
    "8.49"
  );

  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodTextGroup = document.createElement("div");
  foodTextGroup.classList.add("food-text-group");
  foodItem.appendChild(foodTextGroup);

  const foodName = document.createElement("p");
  foodName.classList.add("food-name");
  foodName.textContent = fishPie.name;
  foodTextGroup.appendChild(foodName);

  const foodDesc = document.createElement("p");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = fishPie.description;
  foodTextGroup.appendChild(foodDesc);

  const foodPrice = document.createElement("p");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = fishPie.price;
  foodItem.appendChild(foodPrice);

  return foodItem;
}

function itemBaconSoup() {
  const baconSoup = new menuItem(
    "Leek, Bacon & Potato Soup",
    "Buttery leek and potato base, with generous chopped bacon",
    "£7.99"
  );

  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodTextGroup = document.createElement("div");
  foodTextGroup.classList.add("food-text-group");
  foodItem.appendChild(foodTextGroup);

  const foodName = document.createElement("p");
  foodName.classList.add("food-name");
  foodName.textContent = baconSoup.name;
  foodTextGroup.appendChild(foodName);

  const foodDesc = document.createElement("p");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = baconSoup.description;
  foodTextGroup.appendChild(foodDesc);

  const foodPrice = document.createElement("p");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = baconSoup.price;
  foodItem.appendChild(foodPrice);

  return foodItem;
}

function itemBeefStroganoff() {
  const beefStroganoff = new menuItem(
    "Beef Stroganoff",
    "Classic beef stroganoff with steak and mushrooms, garnished with parsley, served with pasta or rice",
    "£9.49"
  );

  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodTextGroup = document.createElement("div");
  foodTextGroup.classList.add("food-text-group");
  foodItem.appendChild(foodTextGroup);

  const foodName = document.createElement("p");
  foodName.classList.add("food-name");
  foodName.textContent = beefStroganoff.name;
  foodTextGroup.appendChild(foodName);

  const foodDesc = document.createElement("p");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = beefStroganoff.description;
  foodTextGroup.appendChild(foodDesc);

  const foodPrice = document.createElement("p");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = beefStroganoff.price;
  foodItem.appendChild(foodPrice);

  return foodItem;
}

function itemRoastTurkey() {
  const roastTurkey = new menuItem(
    "Roast Turkey wrapped in Bacon",
    "Bacon wrapped turkey breast, sausagemeat and cranberry sauce",
    "10.99"
  );

  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodTextGroup = document.createElement("div");
  foodTextGroup.classList.add("food-text-group");
  foodItem.appendChild(foodTextGroup);

  const foodName = document.createElement("p");
  foodName.classList.add("food-name");
  foodName.textContent = roastTurkey.name;
  foodTextGroup.appendChild(foodName);

  const foodDesc = document.createElement("p");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = roastTurkey.description;
  foodTextGroup.appendChild(foodDesc);

  const foodPrice = document.createElement("p");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = roastTurkey.price;
  foodItem.appendChild(foodPrice);

  return foodItem;
}

function itemStirFry() {
  const stirFry = new menuItem(
    "Salmon Stir-fry",
    "Stir-fry with pak choi and sugar snap peas, topped with soy-marinated salmon",
    "£9.99"
  );

  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodTextGroup = document.createElement("div");
  foodTextGroup.classList.add("food-text-group");
  foodItem.appendChild(foodTextGroup);

  const foodName = document.createElement("p");
  foodName.classList.add("food-name");
  foodName.textContent = stirFry.name;
  foodTextGroup.appendChild(foodName);

  const foodDesc = document.createElement("p");
  foodDesc.classList.add("food-description");
  foodDesc.textContent = stirFry.description;
  foodTextGroup.appendChild(foodDesc);

  const foodPrice = document.createElement("p");
  foodPrice.classList.add("food-price");
  foodPrice.textContent = stirFry.price;
  foodItem.appendChild(foodPrice);

  return foodItem;
}
