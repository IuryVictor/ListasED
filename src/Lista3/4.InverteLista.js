import Lista from "../Lista";

class Inverte {
	constructor() {}

	inverter(lista) {
		let l = new Lista();

		let x = lista.size();

		for (let i = 0; i < x; i++) {
			l.add(lista.removeBeginning());
		}

		for (let i = 0; i < x; i++) {
			lista.append(l.removeBeginning());
		}
	}
}

export default Inverte;
