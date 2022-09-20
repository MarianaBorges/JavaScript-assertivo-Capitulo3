
const somaHorasExtras = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras;
}

const calculaSalario = (salario, descontos) => {
    return salario - descontos;
}

teste('Soma horas extras', 10, somaHorasExtras(5,5));
teste('calculaDesconto', 5, calculaSalario(10,5));
