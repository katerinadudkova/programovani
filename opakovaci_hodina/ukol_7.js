//Z pole z předchozího příkladu vypiš všechny ženy starší 18 let. Opět je možné použít obě varianty průchodu polem.

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
    if (osoba.vek >= 18 && osoba.gender === "žena") {
        console.log(osoba.jmeno)
    }
}

osoby
    .filter(osoba => osoba.vek >= 18 && osoba.gender === "žena")
    .forEach(osoba => console.log(osoba.jmeno))

