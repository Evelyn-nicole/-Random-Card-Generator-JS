window.onload = () => {
    document.querySelector('.top-suit').innerHTML = (generateRandomSuit());
    document.querySelector('.number').innerHTML = (generateRandomNumber());
    document.querySelector('.bottom-suit').innerHTML = (generateRandomSuit());
    
    if(randomSuit === "♥" || randomSuit === "♦") {
        document.querySelector('.top-suit').innerHTML = randomSuit;
        document.querySelector('.top-suit').style.color = "red";

        document.querySelector('.bottom-suit').innerHTML = randomSuit;
        document.querySelector('.bottom-suit').style.color = "red";
    } else {
        document.querySelector('.top-suit').innerHTML = randomSuit;
        document.querySelector('.top-suit').style.color = "black";
        document.querySelector('.bottom-suit').innerHTML = randomSuit;
        document.querySelector('.bottom-suit').style.color = "black";
    }
};
const generateRandomNumber = () =>{
    const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const number = Math.floor(Math.random() * numeros.length);
    
    return numeros[number];
};
const generateRandomSuit = () => {
    let suit = ["♦", "♥", "♠", "♣"];
    const indexSuit = Math.floor(Math.random() * suit.length);
    
    return suit[indexSuit]
};
let randomSuit = generateRandomSuit();











