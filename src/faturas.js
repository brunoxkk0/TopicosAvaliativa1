
filtrarFaturas = fatura => {

    fatura = fatura.filter(maiorQue2000)

    return fatura;
}

const maiorQue2000 = fatura => {
    return fatura.valor > 2000
}

exports.filtrarFaturas = filtrarFaturas;
