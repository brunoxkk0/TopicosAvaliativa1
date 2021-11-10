const {filtrarFaturas} = require("../src/faturas")
const {clientes, faturas} = require("../data")

describe("Filtro de Faturas", () => {

    test("Faturas Menor - 2000", () => {

        const data = faturas.slice(0,3);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(1)
    })

    test("Faturas Entre - 2000 ~ 2500", () => {

        const data = faturas.slice(0, faturas.length);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(8)

    })

    test("Faturas Entre - 2500 ~ 3000", () => {

        const data = faturas.slice(0, faturas.length);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(5)

    })

})
