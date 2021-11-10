const {clientes} = require("../data")

filtrarFaturas = fatura => {

    fatura = fatura.filter(menor2000)
    fatura = fatura.filter(entre2000e2500eDataMenorIgualMesAnterior)

    return fatura;
}

const menor2000 = fatura => {
    return !(fatura.valor < 2000)
}

const entre2000e2500eDataMenorIgualMesAnterior = fatura => {
    return !(fatura.valor >= 2000 && fatura.valor <= 2500 && fatura.data <= mesAnterior())
}

const mesAnterior = () => {
    const mesAnterior = new Date()
    mesAnterior.setMonth(mesAnterior.getMonth() - 1);
    return mesAnterior
}

exports.filtrarFaturas = filtrarFaturas;
