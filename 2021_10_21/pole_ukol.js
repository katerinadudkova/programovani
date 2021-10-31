//Domácí úkol: Použít kód little-indians-7.js z https://gist.github.com/FilipJirsak/c635815e6e20c3ccd99022c6163c296e 
//a přepsat ho tak, aby místo sloka1 a sloka2 používal pole sloka.

let sloky = ['', '']
//let sloka1 = ''
//let sloka2 = ''
for (let pocet = 1; pocet <= 10; pocet++) {
  //sloka1 += pocet
  //sloka2 += 11 - pocet
  sloky[0] += pocet
  sloky[1] += 11 - pocet  
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