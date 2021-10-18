//1.Spočítejte svůj měsíční příjem víte-li, že pracujete 7 hodin denně se mzdou 265 Kč na hodinu. \n
//Řekněme, že měsíc má 21 pracovních dní.
//2.Pokud pracujete na živnostenský list, můžete si odečíst 60% příjmů jako paušál a ze zbytku zaplatíte 15% daň.
//Spočítejte jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.

let pocetHodin = 7
let mzdyZaHodinu = 265
let pracovniDny = 21
let prijem = ((pocetHodin*mzdyZaHodinu)*pracovniDny)
let pausal = 0.6*prijem
let dan = ((prijem-pausal)*0.15)

console.log("Můj měsíční příjem je "+(pocetHodin*mzdyZaHodinu)*pracovniDny + " Kč")
console.log( "Z výplaty zaplatím daň "+Math.floor(dan) + " Kč.")
