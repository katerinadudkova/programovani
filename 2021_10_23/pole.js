const jmena = ["Lucie", "Petra", "Dana", "Marie"]

/* for (let i = 0; i < jmena.length; i++) {
    const jmeno = jmena[i];
    console.log(jmeno)
} */
//dělá to samé jako cyklus nahoře, přidáním "i" nám vypisuje pořadí v poli
//jmena.forEach((jmeno, i) => console.log(jmeno, i))

jmena
    .filter(jmeno => jmeno.length ===5)  //nechá jména která mají délku 5
    //.filter(jmeno => jmeno.startsWith("L")) //vypíše pouze jméno s 5 znaky začínající L
    .map(jmeno => jmeno.substring(0,3))  //vypíše pouze jméno s 5 znaky - první 3 znaky jména
    .forEach(jmeno => console.log(jmeno))

