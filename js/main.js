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

console.log(products);

/** Tax rate */
let taxRate = roll(1,9,1).toFixed(1);
console.log(taxRate);

let cartTotal = products.reduce((accumulator, product) => {
    console.log(accumulator, product);
    return accumulator + parseFloat(product.price) * product.count;
},0).toFixed(2);

console.log(cartTotal);

/** Apply tax rate to the cart total */

function taxedValue(value) {
    return taxRate / 100 * cartTotal + parseFloat(cartTotal);
}
let taxedtotal = taxedValue(cartTotal).toFixed(2);

let productsElement = document.getElementById('products');
let cartHtml = '';
products.forEach((product) => {
    cartHtml += `<div class="product">
        <div>${product.name}</div>
        <div>x${product.count}</div>
        <div>💲${product.price}</div>
    </div>`
});
productsElement.innerHTML = cartHtml;

let summery = document.getElementById('total');
let summeryHtml = '';
summeryHtml += `<div class="total">Total : 💲 ${cartTotal}</div>`;
summeryHtml += `<div>Tax Percentage 💲 ${taxRate}%</div>`;
summeryHtml += `<div>Taxed Total : 💲 ${taxedtotal}</div>`;
summery.innerHTML = summeryHtml;









