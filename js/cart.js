// js/cart.js
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function removeItem(id) {
  let cart = getCart().filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
