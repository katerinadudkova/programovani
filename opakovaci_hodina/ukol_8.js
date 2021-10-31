//Vytvoř funkci, která na vstupu dostane dvě čísla, zkontroluje, že jsou obě čísla větší nebo rovna nule a vrátí kladný rozdíl 
//mezi těmito čísly. Tj. pokud bude na vstupu např. 7 a 5, vrátí 2, pokud bude na vstupu 5 a 7, vrátí také 2. Pokud bude jeden ze
// vstupů záporný, nevrátí funkce nic.

function vratKladnyRozdil(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    let rozdil = a - b
    if (rozdil < 0) {
        rozdil *= -1
    }
    return rozdil
}

function vratKladnyRozdil(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    let rozdil = a - b
    if (rozdil < 0) {
        return -rozdil
    }
    return rozdil
}

function vratKladnyRozdil(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    if (a > b) {
        return a - b
    }
    return b - a
}

function vratKladnyRozdil(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return Math.abs(a - b)
}