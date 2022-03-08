//৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 
const displayLocalstorage = () => {
    const cart = getCart();
    for(const name in cart){
        displayProduct(name);
    }
}

const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if(!name){
        alert('input product name & Price');
    }
    
    //display product ui----->
    displayProduct(name);
    //add local storage--------->
    addProductToCart(name);
    
    nameField.value = '';

    const priceField = document.getElementById('product-price');
    const price = priceField.value; 
    //displayPrice---------ui
    displayProduct(price);
    //add local storage------>
    addProductToCart(price);

    priceField.value = '';
}
//Display productname in the browser UI-------------->
const displayProduct = name => {
    const ul = document.getElementById('name-list');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
//Display productPrice in the browser UI-------------->
// const displayPrice = price => {
//     const ul = document.getElementById('price-list');
//     const li = document.createElement('li');
//     li.innerText = price;
//     ul.appendChild(li);
// }
// Getcart from local storage----------------->
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

//display Name to cart local storage---------->
const addProductToCart = (value) => {
    const cart = getCart();
    if(cart[value]){
        cart[value] = cart[value] + 1;
    } else{
        cart[value] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
displayLocalstorage();

const clearAll = () => {
    document.getElementById('main').textContent = '';
    localStorage.removeItem('cart');
 }

 //Milon --------end