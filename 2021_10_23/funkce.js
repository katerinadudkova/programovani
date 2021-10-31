/* function secti(a, b) {
    //let soucet = a+b
    //return soucet
    return a + b
}

let pocetJablko = secti(2, 3)

console.log(`Děti mají ${pocetJablko} jablek`)
console.log("Děti mají " + pocetJablko + " jablek.")
 */
//PŘÍKLAD kdy funkce předčasně ukončí
/* function deleni(a, b) {
    if (b===0){
        return "Dělení nulou, to nemyslíš vážně!"
    }
    console.log("Můžeme pokračovat v dělení, parametry jsou OK.")
    return a / b
}

console.log(deleni(8, 4))
console.log(deleni(8, 0)) */

//return není definovan
function deleni(a, b) {
    if (b === 0) {
        return
    }
    console.log('Můžeme pokračovat v dělení, parametry jsou OK.')
    return a / b
}

let vysledekDeleni = deleni(8, 4)

if (vysledekDeleni !== undefined) {
    console.log(vysledekDeleni)
}