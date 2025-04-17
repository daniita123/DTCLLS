const cartItems = [];
const cartItemsList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartSidebar = document.querySelector(".cart-sidebar");
const cartIcon = document.querySelector(".cart-icon");
const cartCloseButton = document.querySelector(".cart-close");

function addToCart(name, price) {
  const parsedPrice = parseFloat(price.replace("$", "").replace("MXN", "").trim());

  // Validación
  if (isNaN(parsedPrice)) {
    alert("Error al agregar el producto: el precio no es válido.");
    return;
  }

  cartItems.push({ name, price: parsedPrice });
  updateCart();
}

function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price} MXN
      <button onclick="removeFromCart(${index})">Eliminar</button>
    `;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `$${total} MXN`;
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("open"); // Muestra el carrito
});

cartCloseButton.addEventListener("click", () => {
  cartSidebar.classList.remove("open"); // Cierra el carrito
});

// Imágenes múltiples por producto
document.querySelectorAll('.product-card').forEach(card => {
    const images = [
      "imagen1.jpg",
      "imagen2.jpg",
      "imagen3.jpg"
    ];
    let current = 0;
    const img = card.querySelector('.main-image');
    card.querySelector('.prev-image').addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      img.src = images[current];
    });
    card.querySelector('.next-image').addEventListener('click', () => {
      current = (current + 1) % images.length;
      img.src = images[current];
    });
  });
