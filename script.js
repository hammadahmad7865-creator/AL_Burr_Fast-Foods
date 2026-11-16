// Menu Database based on Al Burr Fast Food Menus
const menuData = [
    // Burgers
    { id: 1, name: "Patty Burger", category: "burger", price: 250, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { id: 2, name: "Tikka Burger", category: "burger", price: 300, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500" },
    { id: 3, name: "Crisper Burger", category: "burger", price: 350, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },
    { id: 4, name: "Double Decker", category: "burger", price: 350, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500" },
    { id: 5, name: "Zinger Burger", category: "burger", price: 250, image: "https://images.unsplash.com/photo-1572802419332-29907a41aa65?w=500" },
    { id: 6, name: "Al Burr Special Burger", category: "burger", price: 399, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { id: 7, name: "Al Burr Tower", category: "burger", price: 350, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },

    // Pizzas (Special Pizza / Stuffer Pizza)
    { id: 8, name: "Al Burr Special Pizza (Small)", category: "pizza", price: 450, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { id: 9, name: "Chicken Tikka Pizza (Medium)", category: "pizza", price: 800, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500" },
    { id: 10, name: "Crown Crust Pizza (Large)", category: "pizza", price: 1399, image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500" },

    // Rolls
    { id: 11, name: "Spin Roll (4 Pcs)", category: "rolls", price: 450, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500" },
    { id: 12, name: "Full Creamy Roll (4 Pcs)", category: "rolls", price: 450, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500" },
    { id: 13, name: "Al Burr Special Roll (4 Pcs)", category: "rolls", price: 500, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500" },
    { id: 14, name: "Chicken Paratha Roll", category: "rolls", price: 260, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500" },
    { id: 15, name: "Zinger Paratha Roll", category: "rolls", price: 280, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500" },

    // Shawarma
    { id: 16, name: "Chicken Shawarma", category: "shawarma", price: 140, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500" },
    { id: 17, name: "Zinger Shawarma", category: "shawarma", price: 200, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500" },
    { id: 18, name: "Malai Boti Shawarma", category: "shawarma", price: 320, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500" },
    { id: 19, name: "Al Burr Pizza Shawarma", category: "shawarma", price: 350, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500" },

    // Pasta
    { id: 20, name: "Crunchy Pasta", category: "pasta", price: 350, image: "https://images.unsplash.com/photo-1621996346565-e3d5d6283298?w=500" },
    { id: 21, name: "Hot & Spicy Pasta", category: "pasta", price: 500, image: "https://images.unsplash.com/photo-1621996346565-e3d5d6283298?w=500" },
    { id: 22, name: "Full Creamy Pasta", category: "pasta", price: 500, image: "https://images.unsplash.com/photo-1621996346565-e3d5d6283298?w=500" },

    // Fries & Wings
    { id: 23, name: "Regular Fries", category: "fries", price: 120, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500" },
    { id: 24, name: "Family Fries", category: "fries", price: 200, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500" },
    { id: 25, name: "Crispy Wings (5 Pcs)", category: "fries", price: 230, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500" },
    { id: 26, name: "Oven Baked Wings (6 Pcs)", category: "fries", price: 300, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500" }
];

let cart = [];
let customerInfo = { name: '', phone: '', address: '' };

// Splash screen timer
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('customer-screen').classList.remove('hidden');
    }, 2000);
});

// Handle Customer Form Submission
document.getElementById('customer-form').addEventListener('submit', (e) => {
    e.preventDefault();
    customerInfo.name = document.getElementById('cust-name').value;
    customerInfo.phone = document.getElementById('cust-phone').value;
    customerInfo.address = document.getElementById('cust-address').value;

    document.getElementById('customer-screen').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
    loadMenuItems(menuData);
});

// Load Menu Items into Grid
function loadMenuItems(items) {
    const grid = document.getElementById('menu-items-grid');
    grid.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="card-body">
                <h3>${item.name}</h3>
                <div class="price">Rs. ${item.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">کارٹ میں شامل کریں</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Menu by Category
function filterMenu(category) {
    document.querySelectorAll('.cat-chip').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        loadMenuItems(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        loadMenuItems(filtered);
    }
}

// Add to Cart Logic
function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCartUI();
}

// Update Cart UI & Count
function updateCartUI() {
    const countSpan = document.getElementById('cart-count');
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    countSpan.textContent = totalQty;

    const listContainer = document.getElementById('cart-items-list');
    listContainer.innerHTML = '';
    let totalAmount = 0;

    cart.forEach(item => {
        totalAmount += item.price * item.qty;
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>Rs. ${item.price} x ${item.qty}</small>
            </div>
            <div class="qty-controls">
                <button onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        `;
        listContainer.appendChild(row);
    });

    document.getElementById('cart-total').textContent = `Rs. ${totalAmount}`;
}

// Change Quantity (+ / -)
function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCartUI();
}

// Open / Close Cart Modal
const cartModal = document.getElementById('cart-modal');
document.getElementById('cart-btn').addEventListener('click', () => {
    cartModal.classList.remove('hidden');
});
document.getElementById('close-cart').addEventListener('click', () => {
    cartModal.classList.add('hidden');
});

// WhatsApp Direct Order Integration
document.getElementById('whatsapp-order-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('آپ کی کارٹ خالی ہے!');
        return;
    }

    let message = `*--- نیا آرڈر (Al Burr Fast Food) ---*\n\n`;
    message += `👤 *نام:* ${customerInfo.name}\n`;
    message += `📞 *فون نمبر:* ${customerInfo.phone}\n`;
    message += `📍 *ایڈریس:* ${customerInfo.address}\n\n`;
    message += `🛒 *آرڈر کی تفصیلات:*\n`;

    let total = 0;
    cart.forEach((item, index) => {
        let subtotal = item.price * item.qty;
        total += subtotal;
        message += `${index + 1}. ${item.name} (${item.qty}x) - Rs. ${subtotal}\n`;
    });

    message += `\n💰 *کل رقم:* Rs. ${total}`;

    // Restaurant WhatsApp Number
    const whatsappNumber = "923070000166"; // You can use 923100705273 as well
    const encodedURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(encodedURL, '_blank');
});
