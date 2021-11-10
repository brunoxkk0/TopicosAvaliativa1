const {filtrarFaturas} = require("../src/faturas")
const {clientes, faturas} = require("../data")

describe("Filtro de Faturas", () => {

    test("Faturas Menor - 2000", () => {

        const data = faturas.slice(0,3);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(0)
    })

})
