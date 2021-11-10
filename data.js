const clientes = [
    {
        id: 0,
        nome: "Maria",
        data_inclusao: new Date("2020-03-25"),
        estado: "Paraná"
    },
    {
        id: 1,
        nome: "João",
        data_inclusao: new Date("2021-04-12"),
        estado: "São Paulo"
    },
    {
        id: 2,
        nome: "José",
        data_inclusao: new Date("2019-04-24"),
        estado: "Paraná"
    },
    {
        id: 3,
        nome: "Paulo",
        data_inclusao: new Date("2021-09-28"),
        estado: "Bahia"
    },
    {
        id: 4,
        nome: "Carla",
        data_inclusao: new Date("2019-03-01"),
        estado: "Santa Catarina"
    },
    {
        id: 5,
        nome: "Helena",
        data_inclusao: new Date("2020-03-25"),
        estado: "Mato Grosso"
    },
    {
        id: 6,
        nome: "Cida",
        data_inclusao: new Date("2021-04-12"),
        estado: "Ceará"
    },
    {
        id: 7,
        nome: "Bruno",
        data_inclusao: new Date("2020-02-03"),
        estado: "Paraná"
    },
]

const faturas = [
    {
        codigo: "0001",
        valor: 39.3,
        data: new Date("2021-08-11"),
        cliente: {
            id: 0
        }
    },
    {
        codigo: "0002",
        valor: 1.35,
        data: new Date("2021-08-11"),
        cliente: {
            id: 1
        }
    },
    {
        codigo: "0003",
        valor: 2400.7,
        data: new Date("2021-08-11"),
        cliente: {
            id: 0
        }
    },
    {
        codigo: "0004",
        valor: 2001.2,
        data: new Date("2021-08-11"),
        cliente: {
            id: 1
        }
    },
    {
        codigo: "0005",
        valor: 2000,
        data: new Date("2021-10-11"),
        cliente: {
            id: 4
        }
    },
    {
        codigo: "0006",
        valor: 2258.3,
        data: new Date("2021-10-11"),
        cliente: {
            id: 5
        }
    },
    {
        codigo: "0007",
        valor: 2100.32,
        data: new Date("2021-02-11"),
        cliente: {
            id: 6
        }
    },
    {
        codigo: "0008",
        valor: 2463,
        data: new Date("2021-02-11"),
        cliente: {
            id: 7
        }
    },
    {
        codigo: "0009",
        valor: 2600,
        data: new Date("2021-02-11"),
        cliente: {
            id: 3
        }
    },
    {
        codigo: "0010",
        valor: 2700,
        data: new Date("2021-02-11"),
        cliente: {
            id: 3
        }
    },
    {
        codigo: "0011",
        valor: 2800.55,
        data: new Date("2021-09-31"),
        cliente: {
            id: 7
        }
    },
    {
        codigo: "0012",
        valor: 2999.7,
        data: new Date("2021-02-11"),
        cliente: {
            id: 6
        }
    },
    {
        codigo: "0013",
        valor: 6403.9,
        data: new Date("2021-08-11"),
        cliente: {
            id: 1
        }
    },
    {
        codigo: "0014",
        valor: 20004,
        data: new Date("2021-09-11"),
        cliente: {
            id: 3
        }
    },
    {
        codigo: "0015",
        valor: 5304.36,
        data: new Date("2021-02-11"),
        cliente: {
            id: 2
        }
    },
    {
        codigo: "0016",
        valor: 89788.12,
        data: new Date("2021-11-10"),
        cliente: {
            id: 4
        }
    },
]

const unidades_federativas = [
    {
        estado: "Amazonas",
        regiao: "Norte"
    },
    {
        estado: "Roraima",
        regiao: "Norte"
    },
    {
        estado: "Amapá",
        regiao: "Norte"
    },
    {
        estado: "Pará",
        regiao: "Norte"
    },
    {
        estado: "Tocantins",
        regiao: "Norte"
    },
    {
        estado: "Rondônia",
        regiao: "Norte"
    },
    {
        estado: "Acre",
        regiao: "Norte"
    },
    {
        estado: "Maranhão",
        regiao: "Nordeste"
    },
    {
        estado: "Piauí",
        regiao: "Nordeste"
    },
    {
        estado: "Ceará",
        regiao: "Nordeste"
    },
    {
        estado: "Rio Grande do Norte",
        regiao: "Nordeste"
    },
    {
        estado: "Pernambuco",
        regiao: "Nordeste"
    },
    {
        estado: "Paraíba",
        regiao: "Nordeste"
    },
    {
        estado: "Sergipe",
        regiao: "Nordeste"
    },
    {
        estado: "Alagoas",
        regiao: "Nordeste"
    },
    {
        estado: "Bahia",
        regiao: "Nordeste"
    },
    {
        estado: "Mato Grosso",
        regiao: "Centro-Oeste"
    },
    {
        estado: "Mato Grosso do Sul",
        regiao: "Centro-Oeste"
    },
    {
        estado: "Goiás",
        regiao: "Centro-Oeste"
    },
    {
        estado: "Distrito Federal",
        regiao: "Centro-Oeste"
    },
    {
        estado: "São Paulo",
        regiao: "Sudeste"
    },
    {
        estado: "Rio de Janeiro",
        regiao: "Sudeste"
    },
    {
        estado: "Espírito Santo",
        regiao: "Sudeste"
    },
    {
        estado: "Minas Gerais",
        regiao: "Sudeste"
    },
    {
        estado: "Paraná",
        regiao: "Sul"
    },
    {
        estado: "Rio Grande do Sul",
        regiao: "Sul"
    },
    {
        estado: "Santa Catarina",
        regiao: "Sul"
    }
]

exports.faturas = faturas;
exports.clientes = clientes;
exports.unidades_federativas = unidades_federativas;
