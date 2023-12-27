let vitorias = 101;
let ranking;
console.log("O herói tem saldo de " + vitorias +  " e está no nível " + ranking);
function calcularSaldo(vitorias) { 
    if (vitorias < 10) {
        ranking = ferro;
    }
    else if (vitorias >= 11 && vitorias <= 20) {
        ranking = bronze;
    }
    else if (vitorias >= 21 && vitorias <= 50) {
        ranking = prata;
    }
    else if (vitorias >= 51 && vitorias <= 80) {
        ranking = ouro;
    }
    else if (vitorias >= 81 && vitorias <= 90) {
        ranking = diamante;
    }
    else if (vitorias >= 91 && vitorias <= 100) {
        ranking = lendario;
    }
    else {
        ranking = imortal;
    }
    return ranking * vitorias
}