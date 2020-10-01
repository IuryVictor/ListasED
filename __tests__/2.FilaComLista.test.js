import Fila from "../src/Lista3/2.FilaComLista";

let f;

beforeEach(() => {
	f = new Fila();
});

test("Fila usando lista", () => {
	f.enqueue(1);
	f.enqueue(2);
	f.enqueue(3);
	f.enqueue(4);
	f.enqueue(5);
	f.clear();
	expect(f.isEmpty()).toBe(true);
});
