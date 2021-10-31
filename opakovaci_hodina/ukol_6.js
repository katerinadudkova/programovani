//Vytvoř pole, do kterého uložíš objekty s informacemi o osobách – ve stejné struktuře, jako u prvního úkolu. Vypiš jména všech 
//osob, které jsou mladší než 18 let. Vyzkoušej obě varianty – pomocí cyklu a příkazu if a také pomocí metod na poli.

const osoby = [
    {
        jmeno: "Jana",
        prijmeni: "Nováková",
        vek: 55,
        email: "jana.novakova@gmail.com",
        gender: "žena",
    },
    {
        jmeno: "Petra",
        prijmeni: "Malá",
        vek: 16,
        email: "petra@gmail.com",
        gender: "žena",
    },
    {
        jmeno: "Jan",
        prijmeni: "Novák",
        vek: 35,
        email: "honzik@seznam.cz",
        gender: "muž",
    },
    {
        jmeno: "Eliška",
        prijmeni: "Krásnohorská",
        vek: 19,
        email: "eli@volny.cz",
        gender: "žena",
    },
]

for (let i = 0; i < osoby.length; i++) {
    const osoba = osoby[i];
    if (osoba.vek < 18) {
        console.log(osoba.jmeno)
    }
}

osoby
    .filter(osoba => osoba.vek < 18)
    .forEach(osoba => console.log(osoba.jmeno))

