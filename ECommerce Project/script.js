document.addEventListener("DOMContentLoaded",()=>{
    const products = [
        {id : 1, name : "Product 1", price : 29.99},
        {id : 2, name : "Product 2", price : 19.99},
        {id : 3, name : "Product 3", price : 59.99}
    ];

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");
    
    renderCart();
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id = "${product.id}">Add to cart</button>
        `
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (event) => {
        if(event.target.tagName === "BUTTON"){
            const productId = parseInt(event.target.getAttribute("data-id"));
            const product = products.find((p) => p.id === productId);
            addToCart(product);
        }
    });

    cartItems.addEventListener("click",(event) => {
        if(event.target.tagName === "BUTTON"){
            const itemId = (event.target.getAttribute("data-id"));
            const item = cart.find((i) => i.id === itemId);
            removeFromCart(item);
        }
    })

    checkoutBtn.addEventListener("click", () => {
        cart.length = 0;
        renderCart();
        alert("Checkout done");
    })

    function addToCart(product){
        cart.push(product);
        saveCart();
        renderCart();
    }
    
    function removeFromCart(product){
        cart.pop(product);
        saveCart();
        renderCart();
    }

    function renderCart(){
        cartItems.innerText = "";
        let totalPrice = 0;
        if(cart.length > 0){
            emptyCartMessage.classList.add("hidden");
            cartTotalMessage.classList.remove("hidden");
            cart.forEach((item) => {
                totalPrice += item.price;
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                <span>${item.name} - $${item.price}</span>
                <button data-id=${item.id}>Remove Item</button>
                `;
                cartItems.appendChild(cartItem);
                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
            })
        }else{
            emptyCartMessage.classList.remove("hidden");
            cartItems.appendChild(emptyCartMessage);
            cartTotalMessage.classList.add("hidden");
        }
        saveCart();
    }

    function saveCart(){
        localStorage.setItem("cart",JSON.stringify(cart));
    }
});