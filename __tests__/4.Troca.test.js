import Troca from "../src/Lista1/4.Troca";
import Pilha from "../src/Pilha";

let t;
let p;

beforeEach(() => {
	t = new Troca();
	p = new Pilha();
});

test("Trocar primeiro e ultimo elemento", () => {
	p.push(1);
	p.push(2);
	p.push(3);
	p.push(4);
	p.push(5);
	p.push(6);
	t.trocar(p);
	expect(p.toString()).toBe("[ 6  2  3  4  5  1 ]");
});
