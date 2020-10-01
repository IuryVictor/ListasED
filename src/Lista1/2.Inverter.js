import Pilha from "../Pilha";

class Inverter {
	constructor() {}

	inverte(palavra) {
		let p = new Pilha(50);

		for (let i = 0; i < palavra.length; i++) {
			p.push(palavra.charAt(i));
		}

		palavra = "";
		let aux = p.size();

		for (let i = 0; i < aux; i++) {
			palavra += p.pop();
		}

		return palavra;
	}
}

export default Inverter;
