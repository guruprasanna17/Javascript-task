let api = "https://fakestoreapi.com/products";

let allProducts = [];

fetch(api)
.then(function(response){
    return response.json();
})
.then(function(data){

    allProducts = data;

    let select = document.getElementById("category");

    data.forEach(function(product){

        let found = false;

        for(let i=0;i<select.options.length;i++){
            if(select.options[i].value == product.category){
                found = true;
            }
        }

        if(found == false){
            let option = document.createElement("option");
            option.value = product.category;
            option.textContent = product.category;
            select.appendChild(option);
        }

    });

    displayProducts(allProducts);

})
.catch(function(){
    document.getElementById("products").innerHTML="<h2>Error Loading Products</h2>";
});

document.getElementById("search").addEventListener("input", filterProducts);
document.getElementById("category").addEventListener("change", filterProducts);
document.getElementById("price").addEventListener("input", filterProducts);

function filterProducts(){

    let search = document.getElementById("search").value.toLowerCase();
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;

    let result = [];

    allProducts.forEach(function(product){

        if(product.title.toLowerCase().includes(search)){

            if(category=="all" || product.category==category){

                if(price=="" || product.price<=price){

                    result.push(product);

                }

            }

        }

    });

    displayProducts(result);

}

function displayProducts(products){

    let container = document.getElementById("products");

    container.innerHTML="";

    document.getElementById("count").textContent =
    "Displayed Products : " + products.length;

    if(products.length==0){

        container.innerHTML="<h2>No Products Found</h2>";

    }
    else{

        products.forEach(function(product){

            container.innerHTML += `
            <div class="card">
                <img src="${product.image}">
                <h3>${product.title}</h3>
                <p>Price : $${product.price}</p>
                <button>Buy Now</button>
            </div>
            `;

        });

    }

}