/* proměnná v cyklu
for (let index = 0; index <10;index++){
    console.log(index)
}
proměnná mimo cyklus
let index = 0
for(; index <10; index++) {
    console.log(index)
} */
//klasicky zapis
//let vysledek = "jmenuji se " + jmeno + " a je mi " + vek +  " let";
//string interpolation
//vysledek = `Jmenuji se ${jmeno} a je mi ${vek} let`;

//pole
let prazdnePole = [];
let poleCisel = [12,8,46,17,4];
let poleJmen =["Eva", "Jana", "Pavla"];
let polePelMel = [2, "Jana", 5];

let mojeOblibenaCisla = [
    42,
    423,
    39,
    123,
    55,
]
mojeOblibenaCisla [3] = 1000  //změní hodnotu na pozici 3 na 1000
//mojeOblibenaCisla [10] = 66
mojeOblibenaCisla.push(44)  //přidá nakonec
mojeOblibenaCisla.pop() // smaže poslední hodnotu
mojeOblibenaCisla.splice(3,1) //smaže hodnotu na pozici 3 = 123
mojeOblibenaCisla.splice(3, 0, 427) //vloží na pozoci 3 hodnotu 427


/* for (let index = 0; index < mojeOblibenaCisla.length; index++) {
    console.log(mojeOblibenaCisla[index]);
} */

console.log("42 je zde: " + mojeOblibenaCisla.indexOf(42))
console.log("999 je zde: " + mojeOblibenaCisla.indexOf(999))
console.log("827 v poli je: " +
    (mojeOblibenaCisla.indexOf(827) >= 0)
)
let indexCislaKOdstraneni = mojeOblibenaCisla.indexOf(39)
if (indexCislaKOdstraneni >= 0) {
    mojeOblibenaCisla.splice(indexCislaKOdstraneni, 1)
} else {
    console.log("Číslo 39 nikdy tvé oblíbené číslo nebylo.")
}