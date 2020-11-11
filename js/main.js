function roll(min, max, floatRange) {
    let r = Math.random() * (max - min) + min;
    return floatRange ? r : Math.floor(r)

}

let possibleProducts = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦"]

let products = [...Array(5)].map((_, i) => {
    return {
        index: i,
        name: possibleProducts[roll(0, possibleProducts.length)],
        price: roll(1, 10, 1).toFixed(2),
        count: roll(1, 5)
    }
})

console.log(products)

let productsElement = document.getElementById('products');
let cartHtml = '';
products.forEach((product) => {
    cartHtml += `<div class="product">
        <div>${product.name}</div>
        <div>x${product.count}</div>
        <div>$${product.price}</div>
    </div>`
});

productsElement.innerHTML = cartHtml;





