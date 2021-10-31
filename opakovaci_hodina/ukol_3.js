//Vytvoř pole, do kterého uložíš jména. Vypiš jména do konzole – vyzkoušej výpis pomocí cyklu a také pomocí metody forEach.

const jmena = ["Petra", "Jana", "Tamara"]

for (let i = 0; i < jmena.length; i++) { 
    const jmeno = jmena[i]  
    console.log(jmeno)
}
// let i = 0          znamená vytvoření proměné i s hodotou nula
// i < jmena.length   obecně znamená dokud je splněná podmínka, tak se cyklus opakuje. Cyklus se bud eopakovat dokud je i menší
//                     délka pole.
// i++                přičítá jedničku k i. Provádí se vždy když dojde nakonec cyklu kódu a musí být splněna předchozí podmínka.
//                    Pokud se předchozí podmínka vyhodnotí jako nesplněná, tato část se nikdy neprovede
//const jmeno = jmena[i]   vytvářím proměnou jmeno a přiřazují do ní položku jmena s indexem i nebo-li vytahuji z cyklu aktuální prvek
//console.log(jmeno)    na objektu console a volám metodu log a jako parametr ji přiřadím proměnou jmeno

jmena.forEach(jmeno => console.log(jmeno))
//pole pojmenované jmena volá metodu forEach a předávám metodě jden parametr. Parametr je anonymní funkce, která očekává jeden
//parametr pojmenovaný jmeno. Výpis na jeden řádek s parametrem jmeno.

jmena.forEach(jmeno => console.log(jmeno))

function vypisJmeno(jmeno) {
    console.log(jmeno)
}

jmena.forEach(vypisJmeno)
