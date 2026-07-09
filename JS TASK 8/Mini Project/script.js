const api = "https://fakestoreapi.com/products";

const productBox = document.getElementById("products");
const search = document.getElementById("search");
const category = document.getElementById("category");
const count = document.getElementById("count");

let allProducts = [];

fetch(api)
.then(res => {
    if(!res.ok){
        throw new Error("Failed to fetch products");
    }
    return res.json();
})
.then(data => {

    allProducts = data;

    displayProducts(allProducts);

    let categories = [...new Set(data.map(item => item.category))];

    categories.forEach(cat => {
        category.innerHTML += `
        <option value="${cat}">${cat}</option>
        `;
    });

})
.catch(error => {
    productBox.innerHTML =
    `<h2 class="error">${error.message}</h2>`;
});

function displayProducts(products){

    count.innerText = products.length;

    productBox.innerHTML = "";

    products.forEach(product => {

        productBox.innerHTML += `

        <div class="card">

            <img src="${product.image}">

            <h3>${product.title}</h3>

            <p class="price">$${product.price}</p>

            <p class="rating">
                ⭐ ${product.rating.rate}
                (${product.rating.count})
            </p>

            <button>Buy Now</button>

        </div>

        `;

    });

}

function filterProducts(){

    let text = search.value.toLowerCase();
    let cat = category.value;

    let filtered = allProducts.filter(product => {

        let matchSearch =
        product.title.toLowerCase().includes(text);

        let matchCategory =
        cat === "all" || product.category === cat;

        return matchSearch && matchCategory;

    });

    displayProducts(filtered);

}

search.addEventListener("keyup", filterProducts);

category.addEventListener("change", filterProducts);