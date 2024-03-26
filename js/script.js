

// Chiedi all'utente la sua età
// let userAge = promt("Salve, prego inserisca la sua età!");
// userAge = parseInt(userAge);
// let resultAge = "La sua età è " + userAge;
// console.log(userAge, typeof userAge);




// // Chiedi quanti km deve fare l'utente 
// let userDistance = prompt("Quanti km devi fare?");
// userDistance = parseInt(userDistance);
// console.log(userDistance, typeof userDistance);

// // Prezzo da pagare
// const standardPrice = 0.21 * userDistance;
// console.log(standardPrice);
// let finalPrice = standardPrice;

// if (userAge < 18) {
//     finalPrice = standardPrice * 0.80;
//     resultAge = "Avendo " + userAge + " anni, può avere lo sconto del 20%";
// } else if (userAge > 65) {
//     finalPrice = standardPrice * 0.60;
//     resultAge = "Avendo " + userAge + " anni, può avere lo sconto del 40%";
// } else {
//     finalPrice = standardPrice;
//     resultAge ="Avendo " + userAge + " anni, non ti verrà applicato nessuno sconto"
// }

// console.log(resultAge);
// document.getElementById("finalprice").innerHTML = "Pagamento: " + (finalPrice)+"€";
// document.getElementById("condition").innerHTML = (resultAge);

// const youngPrice = Math.floor((0.21 * userDistance) * 0.20);
// console.log(youngPrice);
// const oldPrice = Math.floor((0.21 * userDistance) * 0.40);
// console.log(oldPrice);









// Condizioni età prezzo
// if (userAge < 18) {
//     resultAge = "Avendo " + userAge + " può avere lo sconto del 20%";
// } else if (userAge > 69) {
//     resultAge = "Avendo " + userAge + "può avere lo sconto del 40%";
// } else {
//     resultAge = "La sua età è " + userAge;
// }


const sendBtnElem = document.getElementById("send-btn");
console.log(sendBtnElem);


sendBtnElem.addEventListener("click", function(){
    // test
    // console.log("CLICK");

    // DATI

    const ageInputElem = document.getElementById("age"); //object
    console.log(ageInputElem);

    const ageValue = parseInt(ageInputElem.value); //number
    console.log(ageValue, typeof ageValue);

    const kmInputElem = document.getElementById("km-number"); //object
    console.log(kmInputElem);

    const kmValue = parseInt(kmInputElem.value); //number
    console.log(kmValue, typeof kmValue);

    // ESECUZIONE PROGRAMMA
    const standardPrice = 0.21 * kmValue;
    console.log(standardPrice);
    let finalPrice = standardPrice 
    let bgClass;
    if (ageValue < 18) {
        finalPrice = standardPrice * 0.80;
        resultAge = "Avendo " + ageValue + " anni, può avere lo sconto del 20%";
        bgClass = "minorenne";
    } else if (ageValue > 69) {
        finalPrice = standardPrice * 0.60;
        resultAge = "Avendo " + ageValue + " anni, può avere lo sconto del 40%";
        bgClass = "over";

    } else {
        finalPrice = standardPrice;
        resultAge ="Avendo " + ageValue + " anni, non ti verrà applicato nessuno sconto"
        bgClass = "maggiorenne;"
    }
    console.log(finalPrice);
    
    console.log(resultAge);
    document.getElementById("finalprice").innerHTML = "Pagamento: " + (finalPrice)+"€";
    document.getElementById("condition").innerHTML = (resultAge);

    // `
    //     <p class="${bgClass}!>${resultAge}</p>
    // `;
    
    
    
})





