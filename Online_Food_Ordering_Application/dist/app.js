const sidebar = document.querySelector("#sidebar");
const menu = document.querySelector("#menu");

// sidebar toggling
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


async function getProducts() {
  try{
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data)
    renderProducts(data);
  } catch (error) {
    console.log(error)
  }
}

getProducts();

function renderProducts(products) {
  const template = document.querySelector('#card-1'); // save template
  const container = document.querySelector('#food-cards');
  
  const templateClone = template.cloneNode(true); // save a copy before clearing
  container.innerHTML = ''; // now safe to clear

  products.forEach((product) => {
    const card = templateClone.cloneNode(true);
    
    card.removeAttribute('id');
    card.querySelector('img').src = product.imageUrl;
    card.querySelector('p').textContent = product.itemName;

    container.appendChild(card);
  });
}


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