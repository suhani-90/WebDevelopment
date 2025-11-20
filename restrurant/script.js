let cart = [];

function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    let total = 0, count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;
        const div = document.createElement('div');
        div.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
        cartItems.appendChild(div);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
}

function toggleCart() {
    const panel = document.getElementById('cart-panel');
    panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
}

function placeOrder() {
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const confirmation = document.getElementById('confirmation');

    if (!name || !address || cart.length === 0) {
        confirmation.style.color = 'red';
        confirmation.textContent = 'Please fill all fields and add items to your cart.';
        return false;
    }

    // Fake success like PHP
    confirmation.style.color = 'green';
    confirmation.textContent = `Thank you, ${name}! Your order is on its way to ${address}.`;
    cart = [];
    updateCartUI();

    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    return false;
}
