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
        document.querySelector('#card-1 p').textContent = product.itemName;
    }
}

getProduct();