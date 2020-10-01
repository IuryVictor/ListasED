import Fracao from "../src/Lista1/1.Fracao";

let f1;

beforeEach(() => {
	f1 = new Fracao(1, 2);
});

test("Multiplicacao", () => {
	let f2 = new Fracao(2, 4);
	f1.multiplicacao(f2);
	expect(f1.toString()).toBe("2/8");
});

test("Divisao", () => {
	let f3 = new Fracao(5, 10);
	f1.divisao(f3);
	expect(f1.toString()).toBe("10/10");
});
