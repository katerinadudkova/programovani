//Bonusový úkol: Napsat anglické číslovky textově (one…ten) do pole a použít je pro textový výpis 
//Ten Little Indians – čísla budou vypsána anglicky, ne číslicemi. Velikost písmen neřešte

let cislovky = [null, "one", "two", "trhee", "four", "five", "six",  "seven", "eight", "nine", "ten"]
let sloky = ['', '']
//let sloka1 = ''
//let sloka2 = ''
for (let pocet = 1; pocet <= 10; pocet++) {
  //sloka1 += pocet
  //sloka2 += 11 - pocet
  sloky[0] += cislovky[pocet]
  sloky[1] += cislovky[11 - pocet]  
  sloky[0] += " little"
  sloky[1] += " little"
  if (pocet === 10) {
    sloky[0] += " Indian boys.\n"
    sloky[1] += " Indian boy.\n"
  } else if (pocet % 3 === 0) {
    sloky[0] += " Indians,\n"
    sloky[1] += " Indians,\n"
  } else {
    sloky[0] += ", "
    sloky[1] += ", "
  }
}
console.log(sloky[0] + '\n' + sloky[1])