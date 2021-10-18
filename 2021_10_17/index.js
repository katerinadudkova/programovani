/* console.log("Hello world");

let jmeno = "Eliška";
let prijmeni = "Králová";
console.log(jmeno + " " + prijmeni);

let cislo1 = 25;
let cislo2 = 30;
console.log(cislo1 + cislo2);
console.log(jmeno, prijmeni, cislo1);

let mocnina = Math.pow(2 + 3, 3);
console.log(mocnina); */

/*let vek =25
 if (vek<18) {
    console.log("Je nám líto, mladistvým nenaléváme.")
    console.log("Zkus to později.")
} else if (vek === 18) {
    console.log("Jen tak tak.")
} else {
    console.log("Račte vstoupit.")
} */

let vek = 15
let maRad = "pivo" //"víno" nebo "pivo"
let plnolety = vek >= 18

if (plnolety && maRad === "víno") {
    console.log("Nalévám víno")
} else if (plnolety && maRad === "pivo") {
    console.log("Nalévám pivo")
} else {
    console.log("Je nám líto, mladistvým nenaléváme.")
    console.log("Zkus to později.")
}

let cislo = 1
while (cislo <=100) {
    console.log(cislo)
    cislo += 1
}

for (let cislo = 1; cislo <= 100; cislo += 1) {
    console.log(cislo)
}
for (let i = 100; i > 0; i --) {
    console.log(i)
}

