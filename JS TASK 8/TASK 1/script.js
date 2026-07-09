let apilink = "https://fakestoreapi.com/products/"

//Task 1
fetch(apilink)
.then((data1)=>{

    return data1.json()

})
.then((jsdata)=>{

    console.log(jsdata);
    

let api = document.querySelector(".api")
api.innerHTML = `<h1>Total Products : ${jsdata.length} </h1>`


//TASK 2
let products = document.querySelector(".products");

jsdata.forEach((product)=>{
    products.innerHTML += `<h1>${product.title} </h1>`

});

//TASK 3
let productsbelow = document.querySelector(".productsbelow");
jsdata.forEach((productsb)=>{
    if(productsb.price<100){
        productsbelow.innerHTML += `<h2> ${productsb.title} </h2>
        <p> ${productsb.price}  </P>`
    }
})

//TASK 4
let productsabove = document.querySelector(".productsabove")
jsdata.forEach((productsa)=>{
    if(productsa.price>100){
        productsabove.innerHTML = `<h2> ${productsa.title} <p> ${productsa.price} </p> </h2>`
    }
})

//TASK 5
let category = document.querySelector(".category")
jsdata.forEach((product)=>{
    category.innerHTML += `<h1> ${product.title} </h1> <p> ${product.category}  </p>
    <p>${product.price}  </p>`

})

//TASK 6
jsdata.forEach((product)=>{
    category.innerHTML += `<h1> ${product.title} </h1> <p>Category: ${product.category}  </p>
    <p>Price: ${product.price}  </p> <p>Rating : ⭐${product.rating.rate}  </p>`

})

//TASk 7
let result = document.querySelector("#result")
let search = document.querySelector("#search")

search.onkeyup = ()=>{
    
    result.innerHTML="";

jsdata.forEach((product)=>{
    if(product.title.toLowerCase().includes(search.value.toLowerCase())){
        result.innerHTML+= `<h3>${product.title}  </h3>`
    }
})
}

// TASK 8
let result1 = document.querySelector("#result");

jsdata.forEach(function(product) {
    if (product.category === "electronics") {
        result1.innerHTML += `
            <h3>${product.title}</h3>
            <p>Category: ${product.category}</p>
            <hr>
        `;
    }
});

//TASK 9
let result2 = document.querySelector("#result");

jsdata.forEach((product)=>{
    if(product.category ==="men's clothing"){
        result2.innerHTML += `<h3>${product.title} </h3>
        <p><Categoy : ${product.category} /p>
        <hr>`
    }
})

//TASK 10
let result3 = document.querySelector("#result");

jsdata.forEach((product)=>{
    if(product.category ==="women's clothing"){
        result3.innerHTML += `<h3>${product.title} </h3>
        <p><Categoy : ${product.category} /p>
        <hr>`
    }
})

//TASK 11
let result4 = document.querySelector("#result");

jsdata.forEach((product)=>{
    if(product.category ==="jewelery"){
        result4.innerHTML += `<h3>${product.title} </h3>
        <p><Categoy : ${product.category} /p>
        <hr>`
    }
})
//TASK 12
let result5 = document.querySelector("#result")

for(let i=0;i<5;i++){
    result5.innerHTML+=`<h3>${jsdata[i].title} </h3>
    <p>${jsdata[i].price} </p>
    <hr>`
}
//TASK 13
let result6 = document.querySelector("#result")

for(let i=jsdata.length-5;i<jsdata.length;i++){
    result6.innerHTML+=`<h3>${jsdata[i].title} </h3>
    <p>${jsdata[i].price} </p>
    <hr>`
}
//TASK 14
let result7 = document.querySelector("#result")

jsdata.forEach((product,index)=>{
    result7.innerHTML+=`<h3>Product ${index+1} </h3>
    <p>${product.title} </p>`
})
//TASK 15
// TASK 15

let result8 = document.querySelector("#result");

jsdata.forEach((product) => {
    let desc = product.description;

    if (desc.length > 100) {
        desc = desc.slice(0, 100) + " Read More...";
    }

    result8.innerHTML += `
        <h3>${product.title}</h3>
        <p>${desc}</p>
        <hr>
    `;
});

// TASK 16

let result9 = document.querySelector("#result");

let highest = jsdata[0];

jsdata.forEach(function(product) {
    if (product.rating.rate > highest.rating.rate) {
        highest = product;
    }
});

result9.innerHTML = `
    <h3>${highest.title}</h3>
    <p>Rating: ⭐ ${highest.rating.rate}</p>
    <p>Price: $${highest.price}</p>
    <hr>
`;

//TASK 17
let result10 = document.querySelector("#result");

let cheapest = jsdata[0];

jsdata.forEach(function(product) {
    if (product.rating.rate < cheapest.rating.rate) {
        cheapest = product;
    }
});

result10.innerHTML = `
    <h3>${cheapest.title}</h3>
    <p>Rating: ⭐ ${cheapest.rating.rate}</p>
    <p>Price: $${cheapest.price}</p>
    <hr>
`;
// TASK 18

let result11 = document.querySelector("#result");

let costliest = jsdata[0];

jsdata.forEach(function(product) {
    if (product.price > costliest.price) {
        costliest = product;
    }
});

result11.innerHTML = `
    <h3>${costliest.title}</h3>
    <p>Price: $${costliest.price}</p>
    <p>Rating: ⭐ ${costliest.rating.rate}</p>
    <hr>
`;
})
//TASK 19
.catch(function(error) {
    result.innerHTML = `
        <h2>❌ Unable to Load Products</h2>
        <p>Please try again later.</p>
    `;
    console.log(error);
});




















