//Maximum ze tří čísel: https://kodim.cz/czechitas/daweb/zaklady-js/knihovny-vlastni-funkce/#exc-maximum-ze-tri-cisel

function max3(cislo1, cislo2, cislo3) {
    if (cislo1 < cislo2) {
        if (cislo2 < cislo3) {
            return cislo3
        }
        return cislo2
    }
    if (cislo3 < cislo1) {
        return cislo1
    }
    return cislo3
}
//varianta 2
function max3(cislo1, cislo2, cislo3) {
    if (cislo1 < cislo2 && cislo3 < cislo2) {
        return cislo2
    }
    if (cislo3 < cislo1) {
        return cislo1
    }
    return cislo3
}