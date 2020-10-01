import Pilha from "../Pilha";

class ParentesesColchetes {
	constructor() {}

	verificar(texto) {
		let p = new Pilha();

		for (let i = 0; i < texto.length; i++) {
			let c = texto.charAt(i);

			if (c == "(" || c == "[") {
				p.push(c);
			} else if (c == ")") {
				if (p.top() == "(") {
					p.pop();
				} else {
					return "Mal formado";
				}
			} else if (c == "]") {
				if (p.top() == "[") {
					p.pop();
				} else {
					return "Mal formado";
				}
			}
		}

		if (p.size() == 0) {
			return "Bem formado";
		} else {
			return "Mal formado";
		}
	}
}

export default ParentesesColchetes;
