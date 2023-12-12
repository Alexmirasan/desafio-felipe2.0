function calculaSaldoVitoria(vitorias = 0, derrotas = 0) {
    let saldoDePartidas = vitorias - derrotas
    return saldoDePartidas

}
let saldoDeVitorias = calculaSaldoVitoria(86, 5)

function calculaRank(saldoDeVitorias) {
    const nivel = {
        Ferro: saldoDeVitorias <= 10,
        Bronze: saldoDeVitorias > 10 && saldoDeVitorias <= 20,
        Prata: saldoDeVitorias > 20 && saldoDeVitorias <= 50,
        Ouro: saldoDeVitorias > 50 && saldoDeVitorias <= 80,
        Diamante: saldoDeVitorias > 80 && saldoDeVitorias <= 90,
        Lendario: saldoDeVitorias > 90 && saldoDeVitorias <= 100,
        Imortal: saldoDeVitorias > 100
    };

    for (const level in nivel) {
        if (nivel[level]) {
            return console.log(`O Herói tem de saldo ${saldoDeVitorias} está no nível de ${level} `)
        }
    }
    return "default"

}
calculaRank(saldoDeVitorias)