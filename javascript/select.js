var serum= {
    product: "images/serum.png",
    title: "Vitamic C serum" ,
    price: 9800 ,
    originalPrice: 10200 ,
    itemId: "I001"
}

var facewash= {
    product:"images/ceravewash.jpeg",
    title: "Cerave facewash" ,
    price: 11200 ,
    originalPrice: 11000 ,
    itemId: "I002"
}

var moisturizer  = {
    product:"images/facecream.jpeg",
    title: "Cerave facecream" ,
    price: 12000 ,
    originalPrice: 14000 ,
    itemId: "I003"
}

var eyecream = {
    product:"images/eyecream.jpeg",
    title: "Ordinary Eyecream" ,
    price: 14200 ,
    originalPrice: 14000 ,
    itemId: "I004"
}

var glycolidAcid = {
    product:"images/acid.png",
    title: "Ordinary Glycolid acid" ,
    price: 1420 ,
    originalPrice: 1400,
    itemId: "I005"
}


var nightCream = {
    product:"images/nightcream.jpeg",
    title: "Night cream" ,
    price: 1600,
    originalPrice: 2000 ,
    itemId: "I006"
}


var selectId = decodeURIComponent(window.location.search)
var selectedItem = selectId.substring(1)
console.log(selectedItem)
if( selectedItem == serum.itemId ){
    document.getElementById("vitaminSerum").src = serum.product
    document.getElementById("priceOne").innerText = serum.price
    document.getElementById("originalOne").innerText = serum.originalPrice
    
    let cost = serum.price
    quantityCalculation(cost)
}

else if( selectedItem == facewash.itemId){
    document.getElementById("vitaminSerum").src = facewash.product
    document.getElementById("priceOne").innerText = facewash.price
    document.getElementById("originalOne").innerText = facewash.originalPrice

    let cost = facewash.price
    quantityCalculation(cost)
}

else if( selectedItem == moisturizer.itemId){
    document.getElementById("vitaminSerum").src = moisturizer.product
    document.getElementById("priceOne").innerText = moisturizer.price
    document.getElementById("originalOne").innerText = moisturizer.originalPrice

    let cost = moisturizer.price
    quantityCalculation(cost)
}

else if(selectedItem == eyecream.itemId){
    document.getElementById("vitaminSerum").src = eyecream.product
    document.getElementById("priceOne").innerText = eyecream.price
    document.getElementById("originalOne").innerText = eyecream.originalPrice


    let cost = eyecream.price
    quantityCalculation(cost)
}


else if(selectedItem ==  glycolidAcid.itemId){
    document.getElementById("vitaminSerum").src =  glycolidAcid.product
    document.getElementById("priceOne").innerText =  glycolidAcid.price
    document.getElementById("originalOne").innerText =  glycolidAcid.originalPrice

    let cost = glycolidAcid.price
    quantityCalculation(cost)
}


else if(selectedItem ==  nightCream.itemId){
    document.getElementById("vitaminSerum").src =  nightCream.product
    document.getElementById("priceOne").innerText =  nightCream.price
    document.getElementById("originalOne").innerText =  nightCream.originalPrice

    let cost = glycolidAcid.price
    quantityCalculation(cost)

}

function quantityCalculation(cost){
    document.getElementById("quantity").onkeyup = function(){
        let amount = cost
        let quantity = document.getElementById("quantity").value

        if (quantity>1){
            let total = quantity*amount
            document.getElementById("total").innerText = `Total cash: ${total}`

            userLocation(total)
        }
        else if(quantity == 1){
            let total = amount
            document.getElementById("total").innerText = `Total cash: ${total}`

            userLocation(total)
        }
        else if(!quantity){
            document.getElementById("total").innerText = ""
        }
        else{
            document.getElementById("total").innerText = "Enter a valid quantity!!!"
        }
    }



}

function userLocation(total){
    document.getElementById("location").onchange = function(){
        let Nairobi = 1500
        let Mombasa = 300
        let Kisumu = 500

        let location = document.getElementById("location").value

        if(location === "Nairobi"){
            document.getElementById("total").innerText = `Total cash: ${total + Nairobi}`
        }

        else if(location === "Kisumu"){
            document.getElementById("total").innerText = `Total cash: ${total + Kisumu}`
        }

        else if(location === "Mombasa"){
            document.getElementById("total").innerText = `Total cash: ${total + Mombasa}`
        }
        else if(location === ""){
            document.getElementById("total").innerText = `Total cash: ${total}`
        }
    }

    
}

