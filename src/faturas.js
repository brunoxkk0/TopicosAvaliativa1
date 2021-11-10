
filtrarFaturas = fatura => {

    fatura = fatura.filter(maiorQue2000)

    fatura = fatura.filter(el => {
        const mesAnterior = new Date()
        mesAnterior.setMonth(mesAnterior.getMonth() - 1);

        return !(el.valor >= 2000 && el.valor <= 2500 && el.data <= mesAnterior)
    })

    return fatura;
}

const maiorQue2000 = fatura => {
    return !(fatura.valor < 2000)
}

exports.filtrarFaturas = filtrarFaturas;
