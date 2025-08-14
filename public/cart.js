 const cartIcon = document.getElementById("cart-icon");
 const cartPanel = document.getElementById("cart-panel");
 let cartItem = [];
 const cartItems = document.getElementById("cart-items");
 const cartCount = document.getElementById("cart-count");
    
  cartIcon.addEventListener("click", () => {
   if (cartPanel.style.display === 'none'){
    cartPanel.style.display = 'block';
   }else {
    cartPanel.style.display ='none'
   }
  });
function addToCart(event) {
    const item = event.target.getAttribute("data-item");
    const newItem = document.createElement("li");
    newItem.textContent = item;
    cartItems.appendChild(newItem);

    const currentCount = parseInt(cartCount.textContent, 10);
    cartCount.textContent = currentCount + 1;
    cartPanel.classList.remove("hidden");
    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.style.display = "block";
    checkoutBtn.addEventListener("click", () => {  
          setTimeout (() =>   {
         window.location.href = "public/sign.html";
         }, 1000);
        })
}

const cart = document.querySelector(".cart-items");

cart.addEventListener("dblclick", function (event) {
  if (event.target && event.target.tagName === "LI") {
    event.target.remove();
   
    const currentCount = parseInt(cartCount.textContent, 10);
    if (currentCount > 0) {
      cartCount.textContent = currentCount - 1;
    }

    if (cart.children.length === 0) {
      document.getElementById("checkout-btn").style.display = "none";
    }
  }
});