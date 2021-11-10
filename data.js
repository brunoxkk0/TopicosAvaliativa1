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
        estado: "Minas Gerais"
    },
    {
        id: 3,
        nome: "Paulo",
        data_inclusao: new Date("2019-03-01"),
        estado: "Bahia"
    },
    {
        id: 4,
        nome: "Carla",
        data_inclusao: new Date("2019-03-01"),
        estado: "Amazonas"
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
        data: new Date("2021-02-11"),
        cliente: {
            id: 0
        }
    },
    {
        codigo: "0002",
        valor: 1.35,
        data: new Date("2021-02-11"),
        cliente: {
            id: 1
        }
    },
    {
        codigo: "0003",
        valor: 10.7,
        data: new Date("2021-02-11"),
        cliente: {
            id: 2
        }
    },
    {
        codigo: "0003",
        valor: 22.2,
        data: new Date("2021-02-11"),
        cliente: {
            id: 3
        }
    },
    {
        codigo: "0004",
        valor: 71,
        data: new Date("2021-02-11"),
        cliente: {
            id: 4
        }
    },    {
        codigo: "0005",
        valor: 668.3,
        data: new Date("2021-02-11"),
        cliente: {
            id: 5
        }
    },
    {
        codigo: "0006",
        valor: 3387.32,
        data: new Date("2021-02-11"),
        cliente: {
            id: 6
        }
    },
    {
        codigo: "0007",
        valor: 78,
        data: new Date("2021-02-11"),
        cliente: {
            id: 7
        }
    },
    {
        codigo: "0008",
        valor: 30,
        data: new Date("2021-02-11"),
        cliente: {
            id: 0
        }
    },
    {
        codigo: "0009",
        valor: 2300,
        data: new Date("2021-02-11"),
        cliente: {
            id: 2
        }
    },
    {
        codigo: "0010",
        valor: 2300.55,
        data: new Date("2021-09-31"),
        cliente: {
            id: 7
        }
    },    {
        codigo: "0011",
        valor: 7477.7,
        data: new Date("2021-02-11"),
        cliente: {
            id: 6
        }
    },
    {
        codigo: "0012",
        valor: 3403.9,
        data: new Date("2021-08-11"),
        cliente: {
            id: 5
        }
    },    {
        codigo: "0013",
        valor: 20004,
        data: new Date("2021-09-11"),
        cliente: {
            id: 5
        }
    },
    {
        codigo: "0014",
        valor: 5304.36,
        data: new Date("2021-02-11"),
        cliente: {
            id: 2
        }
    },
    {
        codigo: "0015",
        valor: 89788.12,
        data: new Date("2021-11-10"),
        cliente: {
            id: 4
        }
    },
]

exports.faturas = faturas;
exports.clientes = clientes;
