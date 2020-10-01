import Pilha from "../src/Lista3/1.PilhaComLista";

let p;

beforeEach(() => {
	p = new Pilha();
});

test("Pilha usando fila", () => {
	p.push(1);
	p.push(2);
	p.push(3);
	p.push(4);
	p.push(5);
	p.clear();
	expect(p.isEmpty()).toBe(true);
});
