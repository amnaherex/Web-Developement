// ===== TASK 3: Cart badge + mini cart (plain JavaScript) =====
// My numbers: N = 17, so each product can be added at most (17 % 4) + 2 = 3 times.
const MAX_PER_PRODUCT = (17 % 4) + 2; // = 3

// The cart: an array of { name, price } objects
let cart = [];

// Elements already on the page
const addButtons = document.querySelectorAll('.add-btn');   // the 8 "Add to Cart" buttons
const cartIcon   = document.getElementById('cart-icon');     // cart icon in the navbar
const badge      = document.getElementById('cart-count');    // number badge on the icon
const miniCart   = document.getElementById('mini-cart');     // the small panel
const itemsList  = document.getElementById('cart-items');    // <ul> inside the panel
const emptyText  = document.getElementById('cart-empty');    // "Your cart is empty"
const totalText  = document.getElementById('cart-total');    // total price

// How many times a product is already in the cart
function countOf(name) {
    return cart.filter(item => item.name === name).length;
}

// 1) "Add to Cart": read the name and price from the card itself
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card  = button.closest('.product-card');
        const name  = card.querySelector('h3').textContent.trim();
        const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));

        if (countOf(name) < MAX_PER_PRODUCT) {
            cart.push({ name: name, price: price });
            updateCart();
        }
    });
});

// 2) Cart icon: open / close the mini cart (instead of going to checkout)
cartIcon.addEventListener('click', (event) => {
    event.preventDefault(); // stop the link; the panel has its own "Checkout" link
    miniCart.classList.toggle('hidden');
    cartIcon.setAttribute('aria-expanded', !miniCart.classList.contains('hidden'));
});

// 3) "Remove" buttons inside the panel (one listener on the list)
itemsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        const index = Number(event.target.dataset.index);
        cart.splice(index, 1); // remove that one item from the array
        updateCart();
    }
});

// Redraw everything: list, total, badge and button states
function updateCart() {
    // List: one row per item, each with its price and a Remove button
    itemsList.innerHTML = '';
    cart.forEach((item, index) => {
        itemsList.innerHTML += `
            <li class="flex items-center justify-between gap-3 border-b border-neutral-200 py-2">
                <span class="flex-1">${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <button type="button" class="remove-btn text-xs underline" data-index="${index}">Remove</button>
            </li>`;
    });
    emptyText.classList.toggle('hidden', cart.length > 0);

    // Total with reduce()
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalText.textContent = '$' + total.toFixed(2);

    // Badge: number of items (hidden when the cart is empty)
    badge.textContent = cart.length;
    badge.classList.toggle('hidden', cart.length === 0);

    // Limit: disable a product's button once it is in the cart 3 times
    addButtons.forEach(button => {
        const name = button.closest('.product-card').querySelector('h3').textContent.trim();
        const full = countOf(name) >= MAX_PER_PRODUCT;
        button.disabled = full;
        button.textContent = full ? 'Limit reached' : 'Add to Cart';
    });
}

updateCart();
// ===== end TASK 3 =====
