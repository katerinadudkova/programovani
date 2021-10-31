//objekt v poli
let osoby = [
    {
        jmeno: "Nataša",
        prijmeni: "Zelená",
        vek : 23,
        oblibenaJidla: ["zelný salát", "brokolicová polévka"]
    }, {
        jmeno: "Renata",
        prijmeni: "Volfová",
        vek : 19, 
        oblibenaJidla: ["řízek", "svíčková"]
    }, {
        jmeno: "Božena",
        prijmeni: "Němcová",
        vek : 37,
        oblibenaJidla: []
    }
]
console.log(osoby[0].oblibenaJidla[0]) //vypisuje první hodnotu u první osoby

for (let index = 0; index < osoby.length; index++) {
    console.log(osoby[index].prijmeni); //vypisuje všechny hodnoty "prijmeni"
}

for (let i = 0; i < osoby.length; i++) {
    let osoba = osoby[i]
    console.log('Oblíbená jídla osoby ' + osoba.prijmeni + ':');
    for (let j = 0; j < osoba.oblibenaJidla.length; j++)  {
        let oblibeneJidlo = osoba.oblibenaJidla[j]
        console.log('- ' + oblibeneJidlo)      
    }
}