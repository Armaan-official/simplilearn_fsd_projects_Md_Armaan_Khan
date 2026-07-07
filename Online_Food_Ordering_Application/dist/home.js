
//  ============================= sidebar toggling ================================//
const sidebar = document.querySelector("#sidebar");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  menu.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menu.contains(e.target)) {
    sidebar.classList.add("-translate-x-full");
    setTimeout(() => {
      menu.style.display = "block";
    }, 400);
  }
});

let logout = document.querySelector('#logout');

logout.addEventListener('click', () =>{
  logout.action = 'login.html';
})


//  ============================= Auto scrolling for the top oreders ================================//
const sliderTrack = document.querySelector('#sliding-bar');
let position = 0;
const speed = 1.5;

const halfWidth = sliderTrack.scrollWidth / 2;

function slideAnimation() {
  position -= speed;

  if (Math.abs(position) >= halfWidth) {
    position = 0; // reset to start
    sliderTrack.style.transition = 'none'; // instant reset, no animation
    sliderTrack.style.transform = `translateX(0px)`;
    
    // re-enable transition after reset
    setTimeout(() => {
      sliderTrack.style.transition = 'transform 0.1s linear';
    }, 50);
    
  } else {
    sliderTrack.style.transform = `translateX(${position}px)`;
  }
  requestAnimationFrame(slideAnimation);
}

requestAnimationFrame(slideAnimation);



//  ================ Animation for the Top order heading ===================//
const colLeft = document.querySelector('#col-left');
const topHeading = document.querySelector('#top-heading');

colLeft.addEventListener('scroll', () => {
  // console.log(colLeft.scrollTop);
  
  if (colLeft.scrollTop > 20) {
    topHeading.style.opacity = '0';
    topHeading.style.transition = 'opacity 0.2s ease';
  } else {
    topHeading.style.opacity = '1';
  }
});



//  ============================= Fetching the food products ================================//

// very first lines of your script
const countShow = document.querySelector('#cart-number');
const cartData = JSON.parse(localStorage.getItem('cart')) || [];
countShow.textContent = cartData.length;

let allProducts = [];
let cardTemplate = null; // store template globally

async function getProducts() {
  try {
    const response = await fetch('./data.json');
    allProducts = await response.json();

    // save template before first render
    cardTemplate = document.querySelector('#card-1').cloneNode(true);

    renderProducts(allProducts);
  } catch (error) {
    console.log(error);
  }
}

function displayFoodCategory(product){
  
}

document.querySelector('#category-2').addEventListener('click', () => {
  const pizza = allProducts.filter(product => product.category === 'pizza');
  renderProducts(pizza);
  document.querySelector('#display-category').textContent = 'Pizza';
});
document.querySelector('#category-3').addEventListener('click', () => {
  const burger = allProducts.filter(product => product.category === 'burger');
  displayFoodCategory(burger);
  document.querySelector('#display-category').textContent = 'Burger';
  renderProducts(burger);
});
document.querySelector('#category-4').addEventListener('click', () => {
  const veg = allProducts.filter(product => product.category === 'veg');
  displayFoodCategory(veg);
  document.querySelector('#display-category').textContent = 'Vegetarian';
  renderProducts(veg);
});
document.querySelector('#category-5').addEventListener('click', () => {
  const nonVeg = allProducts.filter(product => product.category === 'non-veg');
  displayFoodCategory(nonVeg);
  document.querySelector('#display-category').textContent = 'Non-Vegetarian';
  renderProducts(nonVeg);
});
document.querySelector('#category-6').addEventListener('click', () => {
  const seafood = allProducts.filter(product => product.category === 'seafood');
  displayFoodCategory(seafood);
  document.querySelector('#display-category').textContent = 'Seafood';
  renderProducts(seafood);
});
document.querySelector('#category-7').addEventListener('click', () => {
  const dessert = allProducts.filter(product => product.category === 'dessert');
  displayFoodCategory(dessert);
  document.querySelector('#display-category').textContent = 'Dessert';
  renderProducts(dessert);
});
document.querySelector('#category-8').addEventListener('click', () => {
  const drinks = allProducts.filter(product => product.category === 'drinks');
  displayFoodCategory(drinks);
  document.querySelector('#display-category').textContent = 'Drinks';
  renderProducts(drinks);
});

document.querySelector('#category-1').addEventListener('click', () => {
  const meal = allProducts.filter(product => product.category === 'meal');
  displayFoodCategory(meal);
  document.querySelector('#display-category').textContent = 'Meal';
  renderProducts(meal);
});


document.querySelector('#food-menu').addEventListener('click', () => {
  displayFoodCategory();
  renderProducts(allProducts);
  document.querySelector('#display-category').textContent = 'All Menu';
});


// ========================================== Render products ================================ //
function renderProducts(products) {
  const container = document.querySelector('#food-cards');
  container.innerHTML = '';
  
  products.forEach((product) => {
    const card = cardTemplate.cloneNode(true); // use saved template
    card.removeAttribute('id');
    card.querySelector('img').src = product.imageUrl;
    card.querySelector('img').onerror = function() {
    this.alt = 'There is an error while loading the image.';
  };

  
  // adding to cart btn
  let addTocart = card.querySelector('#add-to-cart');
  const addToCartSound = new Audio('./sound_effects/notification1.mp3');
  addToCartSound.preload = 'none';

  addTocart.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();

    // add to card sound
    addToCartSound.currentTime = 0;
    addToCartSound.play();

    showPopup('Added to cart!', 2000);
    
    // get existing cart or start empty
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // add this product to cart
    cart.push(product);
    // console.log(product);
    
    // save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // save count to localStorage
    localStorage.setItem('cartCount', cart.length);
    countShow.textContent = cart.length;


    // console.log('added to cart:', product.itemName);
    // alert(`${product.itemName} added to cart!`); 
  
  });

  // adding to favorites
  const favoriteFoods = JSON.parse(localStorage.getItem('favoriteFoods')) || [];
  const isFavorited = favoriteFoods.find(item => item.itemID === product.itemID);
  const heartIcon = card.querySelector('#add-to-favorite i');
  const addToFavoriteSound = new Audio('./sound_effects/pop2.mp3');
  addToFavoriteSound.preload = 'none';
  const removeToFavoriteSound = new Audio('./sound_effects/thud1.mp3');
  removeToFavoriteSound.preload = 'none';

  // Toggling the favorite button icon
  if(isFavorited) {
        heartIcon.classList.replace('fa-regular', 'fa-solid');
        heartIcon.classList.add('text-red-600');
    } else{
      heartIcon.classList.replace('fa-solid', 'fa-regular');
      heartIcon.classList.remove('text-red-600');
    }


  let addToFavorite = card.querySelector('#add-to-favorite');
  addToFavorite.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();

  let favoriteFoods = JSON.parse(localStorage.getItem('favoriteFoods')) || [];
  

    heartIcon.classList.toggle('fa-regular');
    heartIcon.classList.toggle('fa-solid');
    heartIcon.classList.toggle('text-red-600');


    // added to and removed from favorites popups
    const alreadyFavorited = favoriteFoods.find(item => item.itemName === product.itemName);
    if(alreadyFavorited) {
        favoriteFoods = favoriteFoods.filter(item => item.itemName !== product.itemName);
        // alert(`${product.itemName} removed from Favorites!`);
        removeToFavoriteSound.currentTime = 0;
        removeToFavoriteSound.play();
        showPopup('Removed from favorites!', 3000);
    } else {
        favoriteFoods.push(product);
        addToFavoriteSound.currentTime = 0;
        addToFavoriteSound.play();
        showPopup('Added to favorites!', 3000);
        // alert(`${product.itemName} added to Favorites!`);
    }

    localStorage.setItem('favoriteFoods', JSON.stringify(favoriteFoods)); 
  });

  card.querySelectorAll('.p-name').forEach(item => item.textContent = product.itemName);
  card.querySelector('#p-price').innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${product.itemPrice}`;
  card.querySelector('.restaurant').textContent = product.restaurantName
  card.querySelector('.p-description').textContent = product.itemDescription;


  // flipping the card
  card.addEventListener('click', () => {
      
    // flipping sound
    const flippingSound = new Audio('./sound_effects/flip2.mp3');
    flippingSound.currentTime = 0;
    flippingSound.play();
    
    setTimeout(() => {
      const inner = card.querySelector('.card-inner');
      const isFlipped = inner.style.transform === 'rotateY(180deg)';
      inner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
    }, 200);
    
    });


  container.appendChild(card);
  });
}

getProducts();


//  ======================== Browse product using the searching bar ============================== //
const searchInput = document.querySelector('#browse-product');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  
  const filtered = allProducts.filter(product => 
    product.itemName.toLowerCase().includes(query)
  );
  
  renderProducts(filtered);
});

// ======================= Capturing address using GPS location ===================== //
// const displayAddress = localStorage.getItem('displayAddress') || '';
// if(displayAddress) {
//       document.querySelector('#address-bar input').value = displayAddress;
//     }

// document.querySelector('#add-address').addEventListener('click', () =>{
//   navigator.geolocation.getCurrentPosition(async (position) => {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const addressBar = document.querySelector('#address-bar input');

//     try {
//       const address = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
//       );
//       const data = await address.json();
//       addressBar.value = data.display_name;
//       localStorage.setItem('displayAddress', data.display_name);
//     } catch (error) {
//       console.log('error:', error);
//     }
//   }); 
// });


// ============================= Sound effects =============================== //
// click button
const clickSound = new Audio('./sound_effects/click1.mp3');


function clickButtonSound(pageLink){
  clickSound.preload = 'none';
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


// hover
const categoryHoverSound = new Audio('./sound_effects/pop5.mp3');
// categoryHoverSound.preload = 'none';
categoryHoverSound.currentTime = 0;

document.querySelectorAll('.category').forEach(product => {
  product.addEventListener('mouseenter', () => {
    categoryHoverSound.currentTime = 0;
    categoryHoverSound.play();
  })
})

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







