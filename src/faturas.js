
filtrarFaturas = fatura => {

    fatura = fatura.filter(maiorQue2000)

    fatura = fatura.filter(el => {

    })

    return fatura;
}

const maiorQue2000 = fatura => {
    return !(fatura.valor < 2000)
}

exports.filtrarFaturas = filtrarFaturas;
