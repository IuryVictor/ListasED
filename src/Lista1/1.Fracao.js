class Fracao {
	constructor(numerador, denominador) {
		this.numerador = numerador;
		this.denominador = denominador;
	}

	multiplicacao(fracao) {
		this.numerador = this.numerador * fracao.numerador;
		this.denominador = this.denominador * fracao.denominador;
		return this;
	}

	divisao(fracao) {
		this.numerador = this.numerador * fracao.denominador;
		this.denominador = this.denominador * fracao.numerador;
		return this;
	}

	toString() {
		let result = `${this.numerador}`;
		result += "/";
		result += `${this.denominador}`;
		return result;
	}
}

export default Fracao;
