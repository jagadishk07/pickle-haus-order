// js/checkout.js
function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let message = "🛒 *New Order - Pickle HAUS*%0A%0A";
  let total = 0;

  cart.forEach(item => {
    message += `• ${item.name} x ${item.qty} = ₹${item.price * item.qty}%0A`;
    total += item.price * item.qty;
  });

  message += `%0A*Total: ₹${total}*%0A%0A`;
  message += "Please confirm availability 🙏";

  let adminNumber = "918885730807"; // <-- CHANGE THIS
  let url = `https://wa.me/${adminNumber}?text=${message}`;

  window.open(url, "_blank");
}
