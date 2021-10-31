//Vytvoř objekt, do kterého uložíš údaje o osobě – jméno, příjmení, věk a e-mailovou adresu a gender 
//(bude uložen jako text 'žena' nebo 'muž'). Konkrétní údaje si vymysli.

let osoba = {
        jmeno: "Ivana",
        prijmeni: "Malá",
        vek: 33,
        email: "ivana.mala@seznam.cz",
        gender: "žena",
        adresa: {
            ulice: "Václavské náměstí",
        }
}



console.log(osoba.prijmeni)
console.log(osoba.prijmeni.length)
console.log(osoba.adresa.ulice)
console.log(osoba.adresa.ulice.length)