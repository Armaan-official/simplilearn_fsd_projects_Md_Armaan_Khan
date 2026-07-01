
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


// const sliderTrack = document.querySelector("#sliding-bar");
// let position = 50;
// const speed = 2.7;
// let isPaused = false;
// sliderTrack.style.transition = "transform 0.1s linear";

// const halfWidth = sliderTrack.scrollWidth / 2;


// setInterval(() => {
//   isPaused = !isPaused;
// }, 2000);

// function slideAnimation() {
//   if (!isPaused) {
//     position -= speed;

//     if (Math.abs(position) >= halfWidth) {
//       sliderTrack.style.transition = 'none';
//       sliderTrack.style.transform = `translateX(0px)`;
//       position = 100;

//       sliderTrack.style.transition = "transform 0.3s linear";
      
//     }

//     sliderTrack.style.transform = `translateX(${position}px)`;
//   }

//   requestAnimationFrame(slideAnimation);
// }

// requestAnimationFrame(slideAnimation);


//  ================ Animation for the Top order heading ===================//
const colLeft = document.querySelector('#col-left');
const topHeading = document.querySelector('#top-heading');

colLeft.addEventListener('scroll', () => {
  console.log(colLeft.scrollTop);
  
  if (colLeft.scrollTop > 20) {
    topHeading.style.opacity = '0';
    topHeading.style.transition = 'opacity 0.2s ease';
  } else {
    topHeading.style.opacity = '1';
  }
});



//  ============================= Fetching the food products ================================//


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


document.querySelector('#category-2').addEventListener('click', () => {
  const pizza = allProducts.filter(product => product.category === 'pizza');
  renderProducts(pizza);
  console.log(pizza)
});
document.querySelector('#category-3').addEventListener('click', () => {
  const burger = allProducts.filter(product => product.category === 'burger');
  renderProducts(burger);
});
document.querySelector('#category-4').addEventListener('click', () => {
  const paneer = allProducts.filter(product => product.category === 'paneer');
  renderProducts(paneer);
});
document.querySelector('#category-5').addEventListener('click', () => {
  const nonVeg = allProducts.filter(product => product.category === 'non-veg');
  renderProducts(nonVeg);
});
document.querySelector('#category-6').addEventListener('click', () => {
  const seafood = allProducts.filter(product => product.category === 'seafood');
  renderProducts(seafood);
});
document.querySelector('#category-7').addEventListener('click', () => {
  const dessert = allProducts.filter(product => product.category === 'dessert');
  renderProducts(dessert);
});
document.querySelector('#category-8').addEventListener('click', () => {
  const drinks = allProducts.filter(product => product.category === 'drinks');
  renderProducts(drinks);
});


document.querySelector('#category-1').addEventListener('click', () => {
  renderProducts(allProducts);
  // console.log(allProducts)
});



function renderProducts(products) {
  const container = document.querySelector('#food-cards');
  container.innerHTML = '';
  // let addTocart = document.querySelector('#add-to-cart');

  products.forEach((product) => {
    const card = cardTemplate.cloneNode(true); // use saved template
    card.removeAttribute('id');
    card.querySelector('img').src = product.imageUrl;
    card.querySelector('img').onerror = function() {
    this.alt = 'There is an error while loading the image.';
  };
  // card.addEventListener('click', () => {
  //       window.location.href = `cart.html?id=${product.itemID}`;
  //   });
    card.querySelector('#p-name').textContent = product.itemName;
    card.querySelector('#p-price').innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${product.itemPrice}`;
    container.appendChild(card);
  });
}

getProducts();





