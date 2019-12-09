// var addProduct = function(){
//     var button = document.getElementById("btnAddProduct");
//     var productName = document.getElementById("productName");
//     var productPrice = document.getElementById("productPrice");
//     var productDetails = document.getElementById("productDetails");
//     productArray = [];
//     button.addEventListener('click', function(){
//         productName = productName.value;
//         productPrice = productPrice.value;
//         productDetails = productDetails.value;
//     });
// }
// addProduct();

var xhr = new XMLHttpRequest();
xhr.open("get","database.json");
console.log(xhr.send());