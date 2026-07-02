// let allProducts = [];
// let cardTemplate = null; // store template globally

// async function getProducts() {
//   try {
//     const response = await fetch('./data.json');
//     allProducts = await response.json();

//     // save template before first render
//     cardTemplate = document.querySelector('#card-1').cloneNode(true);

//     renderProducts(allProducts);
//   } catch (error) {
//     console.log(error);
//   }
// }


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


// const cart = JSON.parse(localStorage.getItem('cart')) || [];
// const container = document.querySelector('#card-container');
// const cartTemplate = document.querySelector('#card-1').cloneNode(true);
// container.innerHTML = '';

// cart.forEach((product) => {
//   const card = cartTemplate.cloneNode(true);
//   card.querySelector('img').src = product.imageUrl;
//   card.querySelector('#p-name').textContent = product.itemName;
//   card.querySelector('#p-price').innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${product.itemPrice}`;
//   container.appendChild(card);


// const removeItem = document.querySelector('#remove-item');
// removeItem.addEventListener('click', (e) => {
//     cart.splice(0, 1); // remove from array
//     localStorage.setItem('cart', JSON.stringify(cart)); // update localStorage
//     card.remove(); // remove card from DOM
//     console.log('removed:', product.itemName);
//   });

// });


let cart = JSON.parse(localStorage.getItem('cart')) || [];
async function loadCart() {
  const container = document.querySelector('#card-container');
  const cartTemplate = document.querySelector('#card-1').cloneNode(true);
  
  container.innerHTML = '<p class="p-4 text-gray-500">No order history yet.</p>' ? '' : '<p class="p-4 text-gray-500">No order history yet.</p>';

  cart.forEach((product, index) => {
    const card = cartTemplate.cloneNode(true);
    card.removeAttribute('id');
    card.querySelector('img').src = product.imageUrl;
    card.querySelector('#p-name').textContent = product.itemName;
    card.querySelector('#p-price').innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${product.itemPrice}`;
    totalProduct();
    addTotal();

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

        
    });


    function addTotal(){
        const total = cart.reduce((sum, product) => sum + Number(product.itemPrice), 0);
        document.querySelector('#total-price span').textContent = total || 0;
    }

    function totalProduct() {
    const numOfProduct = cart.length;
    console.log(cart.length)
    document.querySelector('#total-Product span').textContent = numOfProduct;
    }


    container.appendChild(card);
  });

}

const paymentSound = new Audio('./sound_effects/payment.mp3');
const payment = document.querySelector('#payment');
    payment.addEventListener('click', (product) => {
        
        if(cart.length === 0) {
            console.log('zero')
            alert('Please add a product to pay.');
        }
        else{
            console.log('not zero')
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
                alert('Payment successful!');

                localStorage.removeItem('cart');
                cart.length = 0;
                document.querySelector('#card-container').innerHTML = '<p class="p-4 text-gray-500">No product added yet.</p>';            
                document.querySelector('#total-Product span').textContent = 0;
                document.querySelector('#total-price span').textContent = 0;
            }, 3000);
           
        }

        
    })


document.querySelector('#clear-cart').addEventListener('click', () => {
    localStorage.removeItem('cart');
    cart.length = 0;
    document.querySelector('#card-container').innerHTML = '<p class="p-4 text-gray-500">No product added yet.</p>'
    document.querySelector('#total-Product span').textContent = 0;
    document.querySelector('#total-price span').textContent = 0;
})


if(cart.length === 0) {
    document.querySelector('#card-container').innerHTML = '<p class="p-4 text-gray-500">No product added yet.</p>';
} else {
    loadCart(); // your function that renders cart cards
}


// click button
const clickSound = new Audio('./sound_effects/click2.mp3');
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