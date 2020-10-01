import Pilha from "../Pilha";

class Conversor {
	constructor() {}

	converter(n) {
		let aux1 = new Pilha();
		let aux2 = new Pilha();

		while (n != 1 && n != 0) {
			aux1.push(n % 2);
			n = Math.floor(n / 2);
		}

		aux1.push(n);

		while (aux1.size() != 0) {
			aux2.push(aux1.pop());
		}

		return aux2.toString();
	}
}

export default Conversor;
