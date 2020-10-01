import ParentesesColchetes from "../src/Lista1/6.ParentesesColchetes";

let s;

beforeEach(() => {
	s = new ParentesesColchetes();
});

test("Verificar parenteses e colchetes", () => {
	expect(s.verificar("[(Teste)]")).toBe("Bem formado");
});
