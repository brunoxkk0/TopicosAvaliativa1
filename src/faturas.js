const {clientes, unidades_federativas} = require("../data")

filtrarFaturas = fatura => {

    fatura = fatura.filter(menor2000)
    fatura = fatura.filter(entre2000e2500eDataMenorIgualMesAnterior)
    fatura = fatura.filter(entre2500e3000eClienteMenorQue2MessesAtras)
    fatura = fatura.filter(acima4000eRegiaoSul)

    return fatura;
}

const menor2000 = fatura => {
    return !(fatura.valor < 2000)
}

const entre2000e2500eDataMenorIgualMesAnterior = fatura => {
    return !((fatura.valor >= 2000 && fatura.valor <= 2500) && (fatura.data.getTime() >= mesAnterior().getTime()))
}

const entre2500e3000eClienteMenorQue2MessesAtras = fatura => {
    const cliente = clientes.find(c => c.id === fatura.cliente.id);
    return !((fatura.valor >= 2500 && fatura.valor <= 3000) && (cliente.data_inclusao.getTime() >= voltaMesses(2).getTime()))
}

const acima4000eRegiaoSul = fatura => {
    const cliente = clientes.find(c => c.id === fatura.cliente.id);
    const regiao = unidades_federativas.find(e => e.estado === cliente.estado).regiao
    return !(fatura.valor > 4000 && regiao === "Sul")
}

const mesAnterior = () => {
    let mesAnterior = new Date()
    mesAnterior.setMonth(mesAnterior.getMonth() - 1);
    return mesAnterior
}

const voltaMesses = messes => {
    let mesAnterior = new Date()
    mesAnterior.setMonth(mesAnterior.getMonth() - messes);
    return mesAnterior
}

exports.filtrarFaturas = filtrarFaturas;
