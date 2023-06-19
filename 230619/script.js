//상품 추가 버튼 이벤트 처리
const addToCartButtons = document.querySelectorAll(".add-to-cart")
const cartItemList = document.querySelector(".cart-items");
console.log(addToCartButtons);
console.log(addToCartButtons);

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = 
      button.previousElementSibling.textContext;
    const productPrice = button.previousElementSibling.textContent
  addToCart(productName, productPrice);
  })
  
})

//상품 추가 (장바구니에)
function addToCart(name, price){
  const cartItem = document.createElement("li");
  cartItem.textContent = `${name} - ${price}`
  cartItemList.appendChild(cartItem)
}
