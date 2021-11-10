const {filtrarFaturas} = require("../src/faturas")
const {clientes, faturas} = require("../data")

describe("Filtro de Faturas", () => {

    test("Faturas Menor - 2000", () => {

        const data = faturas.slice(0,3);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(0)
    })

    test("Faturas Entre - 2000 ~ 2500", () => {

        const data = faturas.slice(0, faturas.length);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(6)

    })

})
