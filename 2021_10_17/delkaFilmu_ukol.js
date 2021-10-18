//V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu Pán prstenů: Dvě věže trvá 223 minut.
//My bychom ovšem délku filmu raději věděli v hodinách a minutách. Za použití funkcí a operátorů z této lekce spočítejte,
//kolik hodin a minut trvá film Pán prstenů: Dvě věže. HINT: Zbytek po dělení %

let delkaFilmu = 223
let pocetHodin = Math.floor(delkaFilmu/60)
let pocetMinut = delkaFilmu-(pocetHodin*60)
console.log("Film Pán prstenů: Dvě věže trvá: " + pocetHodin + " hod. a "+ pocetMinut+" min.")