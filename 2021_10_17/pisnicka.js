let cislo = 1 
let cislo2 = 1
let little = " little"
let indians = " Indians"
let indian = " Indian"

for(let cislo = 1; cislo <= 10; cislo ++) {
    
        if (cislo ===10) {
        console.log(cislo+little+indian+" boys.\n")
    }   else if(cislo ===3 || cislo ===6 || cislo ===9) {
        console.log (cislo+little+indians)
    }   else {
        console.log (cislo+little+",")
    }
    } 

for (let cislo2 =10;cislo2 >=1; cislo2 --) {
        if (cislo2 ===1){
            console.log(cislo2+little+indian+" boy.")
        } else if(cislo2 ===8 || cislo2===5 || cislo2 ===2){
            console.log(cislo2+little+indians)
        } else {
            console.log(cislo2+little+",")
        }
    }   
