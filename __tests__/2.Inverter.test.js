import Inverter from "../src/Lista1/2.Inverter";

let i;

beforeEach(() => {
	i = new Inverter();
});

test("Inverter string", () => {
	expect(i.inverte("abacaxi")).toBe("ixacaba");
});
