import Lista from "../Lista";

class Fila {
	constructor() {
		this.f = new Lista();
	}

	enqueue(dado) {
		this.f.append(dado);
	}

	dequeue() {
		return this.f.removeBeginning();
	}

	clear() {
		this.f.clear();
	}

	size() {
		return this.f.size();
	}

	isEmpty() {
		return this.f.isEmpty();
	}

	toString() {
		return this.f.toString();
	}
}

export default Fila;
