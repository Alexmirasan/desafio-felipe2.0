function calculaSaldoVitoria(vitorias = 0, derrotas = 0) {
    let saldoDePartidas = vitorias - derrotas
    return saldoDePartidas

}
let saldoDeVitorias = calculaSaldoVitoria(10, 5)

function rankear(saldoDeVitorias) {
    switch (true) {

        case saldoDeVitorias <= 10:
            console.log(`O Herói tem de saldo ${saldoDeVitorias} está no nível de Ferro `)
            break;

        case saldoDeVitorias > 10 && saldoDeVitorias <= 20:
            console.log(`O Herói tem de saldo ${saldoDeVitorias} está no nível de Bronze `)
            break;

        case saldoDeVitorias > 20 && saldoDeVitorias <= 50:
            console.log(`O Herói tem de saldo ${saldoDeVitorias} está no nível de Prata `)
            break;

        case saldoDeVitorias > 50 && saldoDeVitorias <= 80:
            console.log(`O Herói tem de saldo ${saldoDeVitorias} está no nível de Ouro `)
            break;

        case saldoDeVitorias > 80 && saldoDeVitorias <= 90:
            console.log(`O Herói tem de saldo ${saldoDeVitorias} está no nível de Diamante `)
            break;

        case saldoDeVitorias > 90 && saldoDeVitorias <= 100:
            console.log(`O Herói tem de saldo ${saldoDeVitorias} está no nível de Lendario `)
            break;

        case saldoDeVitorias > 100:
            console.log(`O Herói tem de saldo ${saldoDeVitorias} está no nível de Imortal `)
            break;

        default: console.log("Isso é diferente de numero!")

    }
}

rankear(saldoDeVitorias)
