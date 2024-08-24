// Navbar Toggle Functionality

function toggleMenu(element) {
  const navMenu = document.querySelector('.nav-menu');
  element.classList.toggle('change');
  navMenu.classList.toggle('show');
}



// Add to cart Functionality

document.addEventListener('DOMContentLoaded', function () {
  const plusBtns = document.querySelectorAll('.plus-btn');
  const minusBtns = document.querySelectorAll('.minus-btn');
  const cartQuantity = document.querySelector('.cart-quantity');

  let totalQuantity = 0;

  plusBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const quantityElement = this.previousElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;

      // Update the cart quantity
      totalQuantity++;
      cartQuantity.textContent = totalQuantity;
    });
  });

  minusBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const quantityElement = this.nextElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;

        // Update the cart quantity
        if (totalQuantity > 0) {
          totalQuantity--;
          cartQuantity.textContent = totalQuantity;
        }
      }
    });
  });
});

