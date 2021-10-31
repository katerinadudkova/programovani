import fetch from 'node-fetch'

const url = 'https://api.sunrise-sunset.org/json?lat=50.0833250&lng=14.4252008'
 
/* function poStazeniDat(vysledekVolani) {
    console.log("Data stažena: ", vysledekVolani.status, vysledekVolani.statusText)
    return vysledekVolani.text()
}

function poZpracovaniDat(data) {
    console.log("Hurá, data jsou zde: ", data)
} 

fetch(url)
    .then(poStazeniDat)
    .then(poZpracovaniDat) */

//Arrow funkce = kdy místo slova "function"  použijeme =>
function zpracujData(data) {
    console.log("Hurá, moje data: ", data)
    console.log("Východ slunce v Praze:", data.results.sunrise)
    console.log("Západ slunce v Praze:", data.results.sunset)
}
/* fetch(url)
    .then(vysledekVolani => vysledekVolani.text())
    .then(vychodyZapadySlunce => zpracujData(vychodyZapadySlunce)) */

//zkrácení kódu
fetch(url)
    .then(resp => resp.json())
    .then(json => zpracujData(json))