
filtrarFaturas = fatura => {

    fatura = fatura.filter(f => {
        return f.valor > 2000
    })

    return fatura;
}

exports.filtrarFaturas = filtrarFaturas;
