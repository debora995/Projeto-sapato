let cartCount = 0;

document.getElementById('add-to-cart').addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    addToCart('Sapato de Couro', 'R$ 199,99');
});

function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.innerText = `${productName} - ${productPrice}`;
    cartItems.appendChild(listItem);
}

function showCart() {
    document.getElementById('cart').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart').style.display = 'none';
}
