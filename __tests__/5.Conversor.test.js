import Conversor from "../src/Lista1/5.Conversor";

let c;

beforeEach(() => {
	c = new Conversor();
});

test("Decimal para binario", () => {
	expect(c.converter(450)).toBe("[ 1  1  1  0  0  0  0  1  0 ]");
});
