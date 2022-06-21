const cartProducts = document.querySelector(".cart__products");
const products = document.querySelectorAll(".product");

const addProductCard = (id) => {
  const product = document.querySelector(`[data-id="${id}"]`);
  const productCount = product.querySelector(".product__quantity-value");
  const productImg = product.querySelector(".product__image");

  const newProductCard = document.createElement("div");
  newProductCard.classList.add("cart__product");
  newProductCard.dataset.id = id;

  const newProductImage = document.createElement("img");
  newProductImage.classList.add("cart__product-image");
  newProductImage.src = productImg.src;

  const newProductCount = document.createElement("div");
  newProductCount.classList.add("cart__product-count");
  newProductCount.textContent = productCount.textContent.trim();

  newProductCard.append(newProductImage, newProductCount);
  cartProducts.appendChild(newProductCard);
};

products.forEach(product => {
  const decrementButton = product.querySelector(".product__quantity-control_dec");
  const incrementButton = product.querySelector(".product__quantity-control_inc");
  const quantity = product.querySelector(".product__quantity-value");
  const addButton = product.querySelector(".product__add");

  decrementButton.addEventListener("click", () => {
    quantity.textContent = String(Number(quantity.textContent.trim()) - 1);
  });

  incrementButton.addEventListener("click", () => {
    quantity.textContent = String(Number(quantity.textContent.trim()) + 1);
  });

  addButton.addEventListener("click", () => {
    const productInCart = cartProducts.querySelector(`[data-id="${product.dataset.id}"]`);
    if (productInCart) {
      const productCount = productInCart.querySelector(".cart__product-count");
      productCount.textContent = String(Number(productCount.textContent) + Number(quantity.textContent));
    } else {
      addProductCard(product.dataset.id);
    }
  });
});