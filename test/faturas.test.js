const {filtrarFaturas} = require("../src/faturas")
const {faturas} = require("../data")

describe("Filtro de Faturas", () => {

    test("Faturas Menor - 2000", () => {

        const data = faturas.slice(0,4);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(2)
    })

    test("Faturas Entre - 2000 ~ 2500", () => {

        const data = faturas.slice(4, 8);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(2)

    })

    test("Faturas Entre - 2500 ~ 3000", () => {

        const data = faturas.slice(8, 12);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(2)

    })

    test("Faturas Entre - 4000", () => {

        const data = faturas.slice(12, 16);
        const result = filtrarFaturas(data);

        expect(result).toHaveLength(2)

    })

})
