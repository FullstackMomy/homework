let products = [
  [1, "lipstick", "8$"],
  [2, "blusher", "10$"],
  [3, "eyeshadows", "15$"],
  [4, "eyeliner", "20$"],
];

let cartItems = [];
function addToCart(productID) {
  let selected;
  for (let i = 0; i < products.length; i++) {
    if (productID == products[i][0]) {
      selected = products[i];
      break;
    }
  }
  cartItems.push(selected);
  renderCart();
}

function renderCart() {
  document.getElementById("shoppingCart").innerText = "";
  for (let i = 0; i < cartItems.length; i++) {
    document.getElementById("cartEmpty").innerText = "";
    let selected = cartItems[i];

    let productElement = document.createElement("div");
    let nameSpan = document.createElement("span");
    nameSpan.innerText = selected[1];
    nameSpan.setAttribute("class", "productName");
    productElement.appendChild(nameSpan);

    let priceSpan = document.createElement("span");
    priceSpan.innerText = selected[2];
    priceSpan.setAttribute("class", "productPrice");
    productElement.appendChild(priceSpan);

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove product";
    removeButton.setAttribute("onclick", "removeFromCart(" + i + ")");
    productElement.appendChild(removeButton);

    document.getElementById("shoppingCart").appendChild(productElement);
  }
}

function removeFromCart(position) {
  cartItems.splice(position, 1);
  renderCart();
}
