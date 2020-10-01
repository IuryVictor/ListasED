import Pilha from "../Pilha";

class Troca {
	constructor() {}

	trocar(pilhaA) {
		let aux = new Pilha();

		let dadoAux = pilhaA.pop();
		let x = pilhaA.size();

		for (let i = 0; i < x; i++) {
			aux.push(pilhaA.pop());
		}

		pilhaA.push(dadoAux);
		dadoAux = aux.pop();
		x = aux.size();

		for (let i = 0; i < x; i++) {
			pilhaA.push(aux.pop());
		}

		pilhaA.push(dadoAux);
	}
}

export default Troca;
