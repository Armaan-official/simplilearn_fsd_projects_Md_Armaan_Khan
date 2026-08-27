//  ======================== getting the card from the local storage ======================== //
async function getProduct() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const response = await fetch('./data.json');
    const allProducts = await response.json();

    const product = allProducts.find(p => p.itemID == id);

    if(product) {
        document.querySelector('#card-1 img').src = product.imageUrl;
    }
}

getProduct();

//  ======================== Handling the empty and non-empty cart ================================ //
const container = document.querySelector('#card-container');
const cartTemplate = document.querySelector('#card-1').cloneNode(true);
let cart = JSON.parse(localStorage.getItem('cart')) || [];

async function loadCart() {
  if(cart.length === 0){
        container.innerHTML = '<p class="p-4 text-gray-500">No products added yet.</p>';
    } else{
        container.innerHTML = '';
    }

    // Generating the cards similar to the home page
  cart.forEach((product, home) => {
    const card = cartTemplate.cloneNode(true);
    card.removeAttribute('id');
    card.querySelector('img').src = product.imageUrl;
    card.querySelector('#p-name').textContent = product.itemName;
    card.querySelector('#p-price').innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${product.itemPrice}`;
    totalProduct();
    addTotal();

    // remove each card
    const removeItem = card.querySelector('#remove-item');
    removeItem.addEventListener('click', () => {
        const updatedCart = cart.filter(item => item !== product);
    
    // update the cart array in place
        cart.length = 0;
        updatedCart.forEach(item => cart.push(item));
        localStorage.setItem('cart', JSON.stringify(cart));
        card.remove();
        
        totalProduct();
        addTotal();

        if(cart.length === 0){
        container.innerHTML = '<p class="p-4 text-gray-500">No products added yet.</p>';
        }
    });


    function addTotal(){
        const total = cart.reduce((sum, product) => sum + Number(product.itemPrice), 0);
        document.querySelector('#total-price span').textContent = total || 0;
    }

    function totalProduct() {
        const numOfProduct = cart.length;
        // console.log(cart.length)
        document.querySelector('#total-Product span').textContent = numOfProduct;
    }


    container.appendChild(card);
  });

}

//  =================================== Payment method =================================== //
    const paymentSound = new Audio('./sound_effects/payment.mp3');
    const payment = document.querySelector('#payment');
    payment.addEventListener('click', (product) => {
        
        if(cart.length === 0) {
            showPopup('Please add a product to pay!');
        }
        else{
            payment.textContent = 'Loading....';
            setTimeout(() => {
                
                let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
                
                orderHistory.push({
                    date: new Date().toLocaleString(),
                    items: [...cart],
                    total: cart.reduce((sum, item) => sum + Number(item.itemPrice), 0)
                });
                localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
                

                payment.textContent = 'Pay Now';
                paymentSound.currentTime = 0;
                paymentSound.play();
                showPopup('Payment successful!');

                localStorage.removeItem('cart');
                cart.length = 0;
                document.querySelector('#card-container').innerHTML = '<p class="p-4 text-gray-500">No products added yet.</p>';            
                document.querySelector('#total-Product span').textContent = 0;
                document.querySelector('#total-price span').textContent = 0;
            }, 3000);
           
        }

        
    })

//  ========================= clear button to delete all cards together ================================= //
document.querySelector('#clear-cart').addEventListener('click', () => {
    localStorage.removeItem('cart');
    cart.length = 0;
    document.querySelector('#card-container').innerHTML = '<p class="p-4 text-gray-500">No products added yet.</p>'
    document.querySelector('#total-Product span').textContent = 0;
    document.querySelector('#total-price span').textContent = 0;
})


if(cart.length === 0) {
    document.querySelector('#card-container').innerHTML = '<p class="p-4 text-gray-500">No products added yet.</p>';
} else {
    loadCart();
}

// =================================== sound effects ===================================== //

// click button
const clickSound = new Audio('./sound_effects/click1.mp3');
// clickSound.preload = 'none';

function clickButtonSound(pageLink){
  clickSound.currentTime = 0;
  clickSound.play();
  setTimeout(() => {
    window.location.href = pageLink;
  }, 500);
}

function commonButtonSound(){
  clickSound.currentTime = 0;
  clickSound.play();
}

function removeFromCartSound(message){
    const removeSound = new Audio('./sound_effects/delete1.mp3');
    if(cart.length !== 0) {
        removeSound.currentTime = 0;
        removeSound.play();
        showPopup(message, 3000);
    }
}



// ===================================== popup =========================== // 
function showPopup(message, duration = 3000) {
    const popup = document.querySelector('#popup');
    popup.textContent = message;
    popup.classList.remove('opacity-0');
    popup.classList.add('opacity-100');

    setTimeout(() => {
        popup.classList.remove('opacity-100');
        popup.classList.add('opacity-0');
    }, duration);
}