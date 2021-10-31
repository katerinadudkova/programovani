let osoba = {
    jmeno: "Jana",
    prijmeni: "Czechitas",
    vek: 20,
    'cele jmeno': 'Jana Novotná',
}
osoba.jmeno = "Petra"  //změna z Jany na Petru
osoba.rodnePrijmeni = 'Červená'

let promena = "jmeno"

console.log(osoba.jmeno)
console.log(osoba["jmeno"])
//console.log(osoba.cele jmeno) x nefunguje
console.log(osoba['cele jmeno'])
console.log(osoba[promena]) //použití pokud nevím co je za hodnotu např. vstup od uživatele
console.log(osoba)
