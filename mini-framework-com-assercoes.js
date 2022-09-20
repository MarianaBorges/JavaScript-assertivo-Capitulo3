const assert = require('assert');
const verificaQue = (valor) => {
    const assercoes = {
        ehExatamenteIgualA(esperado){
            assert.strictEqual(valor, esperado);
        }
    }
    return assercoes;
}

const teste = (titulo, funcaoTeste) => {
    try {
        funcaoTeste();
        console.log(`${titulo} Passou`);
    } catch (error) {
        console.log(`${titulo} Ih, deu errado ...`);
    }
}

const somaHorasExtras = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras;
}

const calculaSalario = (salario, descontos) => {
    return salario - descontos;
}

teste('somaHorasExtras', () => {
    const esperado = 10;
    const retornado = somaHorasExtras(5,5);

    verificaQue(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaSalario', () => {
    const esperado = 5;
    const retornado = calculaSalario(10,5);

    verificaQue(retornado).ehExatamenteIgualA(esperado);
});
