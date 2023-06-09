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
    roastPork.createItem(),
    beefStew.createItem(),
    chickenPasta.createItem(),
    fishPie.createItem(),
    baconSoup.createItem(),
    beefStroganoff.createItem(),
    roastTurkey.createItem(),
    stirFry.createItem()
  );
  menuContent.appendChild(menuContainer);

  const dessertWrap = document.createElement("section");
  dessertWrap.classList.add("dessert-wrap");
  content.appendChild(dessertWrap);

  const dessertContent = document.createElement("div");
  dessertContent.classList.add("dessert-content");
  dessertWrap.appendChild(dessertContent);

  const dessertTitle = document.createElement("h3");
  dessertTitle.classList.add("dessert-title");
  dessertTitle.textContent = "Signature Desserts";
  dessertContent.appendChild(dessertTitle);

  const dessertSubTitle = document.createElement("p");
  dessertSubTitle.classList.add("dessert-sub-title");
  dessertSubTitle.textContent = "Reinvented";
  dessertContent.appendChild(dessertSubTitle);

  const dessertMenu = document.createElement("div");
  dessertMenu.classList.add("dessert-menu");
  dessertMenu.append(cheeseCake.createItem(), chocBrownies.createItem());
  dessertContent.appendChild(dessertMenu);

  const drinkWrap = document.createElement("section");
  drinkWrap.classList.add("drink-wrap");
  content.appendChild(drinkWrap);

  const drinkContent = document.createElement("div");
  drinkContent.classList.add("drink-content");
  drinkWrap.appendChild(drinkContent);

  const drinkTitle = document.createElement("h3");
  drinkTitle.classList.add("drink-title");
  drinkTitle.textContent = "Our Drinks";
  drinkContent.appendChild(drinkTitle);

  const drinkSubTitle = document.createElement("p");
  drinkSubTitle.classList.add("drink-sub-title");
  drinkSubTitle.textContent = "Refreshing";
  drinkContent.appendChild(drinkSubTitle);

  const drinkMenu = document.createElement("div");
  drinkMenu.classList.add("drink-menu");
  drinkMenu.append(mead.createItem(), wine.createItem());
  drinkContent.appendChild(drinkMenu);
}

class menuItem {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
  createItem() {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");

    const foodTextGroup = document.createElement("div");
    foodTextGroup.classList.add("food-text-group");
    foodItem.appendChild(foodTextGroup);

    const foodName = document.createElement("p");
    foodName.classList.add("food-name");
    foodName.textContent = this.name;
    foodTextGroup.appendChild(foodName);

    const foodDesc = document.createElement("p");
    foodDesc.classList.add("food-description");
    foodDesc.textContent = this.description;
    foodTextGroup.appendChild(foodDesc);

    const foodPrice = document.createElement("p");
    foodPrice.classList.add("food-price");
    foodPrice.textContent = this.price;
    foodItem.appendChild(foodPrice);

    return foodItem;
  }
}

const roastPork = new menuItem(
  "Roast Pork Shoulder",
  "Roast pork with crispy crackling, served with roast potatoes and veg",
  "£8.99"
);

const beefStew = new menuItem(
  "Beef Stew",
  "A traditional braised beef casserole with thick, rich gravy and chunky veg",
  "£7.75"
);

const chickenPasta = new menuItem(
  "Chicken & Bacon Pasta",
  "chicken and bacon with ribbons of tagliatelle with creamy sauce, served with a green salad",
  "£7.99"
);

const fishPie = new menuItem(
  "Creamy Fish & Leek Pie",
  "King prawns, salmon and haddock and topped with a comforting, cheesy mash",
  "£8.49"
);

const baconSoup = new menuItem(
  "Leek, Bacon & Potato Soup",
  "Buttery leek and potato base, with generous chopped bacon",
  "£7.99"
);

const beefStroganoff = new menuItem(
  "Beef Stroganoff",
  "Classic beef stroganoff with steak and mushrooms, garnished with parsley, served with pasta or rice",
  "£9.49"
);

const roastTurkey = new menuItem(
  "Roast Turkey wrapped in Bacon",
  "Bacon wrapped turkey breast, sausagemeat and cranberry sauce",
  "£10.99"
);

const stirFry = new menuItem(
  "Salmon Stir-fry",
  "Stir-fry with pak choi and sugar snap peas, topped with soy-marinated salmon",
  "£9.99"
);

const cheeseCake = new menuItem(
  "Strawberry Cheesecake",
  "Classic summer dessert topped with a sweet strawberry sauce, and fresh strawberries",
  "£3.99"
);

const chocBrownies = new menuItem(
  "Chocolate Fudge Brownies",
  "Rich and fudgy, topped with caramel and a side of assorted fresh fruit",
  "£3.49"
);

const mead = new menuItem(
  "Mead",
  "Sweet and refreshing, rich with fruits and spices",
  "£2.49"
);

const wine = new menuItem(
  "Wine",
  "Warm, fruity and full-bodied red wine",
  "£2.99"
);
