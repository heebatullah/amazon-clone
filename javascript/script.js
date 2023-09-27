var serum= {
    product: "images/serum.png",
    title: "Vitamic C serum" ,
    price: 9800 ,
    originalPrice: 10200 ,
    itemId: "I001"
}

document.getElementById("vitaminSerum").src = serum.product
document.getElementById("name1").innerText = serum.title
document.getElementById("priceOne").innerText = serum.price
document.getElementById("originalOne").innerText = serum.originalPrice

var facewash= {
    product:"images/ceravewash.jpeg",
    title: "Cerave facewash" ,
    price: 11200 ,
    originalPrice: 11000 ,
    itemId: "I002"
}

document.getElementById("facialwash").src = facewash.product
document.getElementById("name2").innerText = facewash.title
document.getElementById("priceTwo").innerText = facewash.price
document.getElementById("originalTwo").innerText =facewash.originalPrice

var moisturizer  = {
    product:"images/facecream.jpeg",
    title: "Cerave facecream" ,
    price: 12000 ,
    originalPrice: 14000 ,
    itemId: "I003"
}

document.getElementById("skincream").src = moisturizer.product
document.getElementById("name3").innerText = moisturizer.title
document.getElementById("priceThree").innerText = moisturizer.price
document.getElementById("originalThree").innerText = moisturizer.originalPrice


var eyecream = {
    product:"images/eyecream.jpeg",
    title: "Ordinary Eyecream" ,
    price: 14200 ,
    originalPrice: 14000 ,
    itemId: "I004"
}

document.getElementById("undereyeCream").src = eyecream.product
document.getElementById("name4").innerText = eyecream.title
document.getElementById("priceFour").innerText = eyecream.price
document.getElementById("originalFour").innerText = eyecream.originalPrice



var glycolidAcid = {
    product:"images/acid.png",
    title: "Ordinary Glycolid acid" ,
    price: 1420 ,
    originalPrice: 1400,
    itemId: "I005"
}

document.getElementById("facialAcid").src = glycolidAcid.product
document.getElementById("name5").innerText = glycolidAcid.title
document.getElementById("priceFive").innerText = glycolidAcid.price
document.getElementById("originalFive").innerText = glycolidAcid.originalPrice


var nightCream = {
    product:"images/nightcream.jpeg",
    title: "Night cream" ,
    price: 1600,
    originalPrice: 2000 ,
    itemId: "I006"
}

document.getElementById("nCream").src = nightCream.product
document.getElementById("name6").innerText = nightCream.title
document.getElementById("priceSix").innerText = nightCream.price
document.getElementById("originalSix").innerText = nightCream.originalPrice





document.getElementById("serum").onclick = function () {
    window.location.href = "/select.html" + "?" + serum.itemId;
  };

  document.getElementById("facewash").onclick = function () {
    window.location.href = "/select.html" + "?" + facewash.itemId;
  };

  document.getElementById("moisturizer").onclick = function () {
    window.location.href = "/select.html" + "?" + moisturizer.itemId;
  };

  document.getElementById("eyecream").onclick = function () {
    window.location.href = "/select.html" + "?" + eyecream.itemId;
  };


  document.getElementById("glycolidAcid").onclick = function () {
    window.location.href = "/select.html" + "?" + glycolidAcid.itemId;
  };

  document.getElementById("nightCream").onclick = function () {
    window.location.href = "/select.html" + "?" + nightCream.itemId;
  };