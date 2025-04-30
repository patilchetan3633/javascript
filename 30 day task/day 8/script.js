let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById('cart');
  const totalElement = document.getElementById('total');

  // Clear current cart
  cartElement.innerHTML = '';

  // Add each item
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    cartElement.appendChild(li);
  });

  // Update total
  totalElement.innerText = `Total: $${total}`;
}