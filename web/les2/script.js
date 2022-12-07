console.log("Hello World")

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');


function zetInFruitLa(Fruit){
    console.log(Fruit + " in fruitla gezet");
    const nieuwElement = document.createElement("h3");
    nieuwElement.innerHTML = Fruit;
    nieuwElement.className = "Fruit";    
    fruitvak.appendChild(nieuwElement);
}
function zetInGroenteLa(Groente){
    console.log(Groente + " in groentela gezet");
    const nieuwElement = document.createElement("h3");
    nieuwElement.innerHTML = Groente;
    nieuwElement.className = "Groente";
    groentevak.appendChild(nieuwElement);
}