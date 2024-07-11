let numero = parseInt(prompt("Ingresa un numero"));


if (numero % 2 === 0) {
    document.write(`El ${numero} es divisible por 2.`);
} else if (numero % 3 === 0) {
    document.write(`El ${numero} es divisible por 3.`);
} else if (numero % 5 === 0) {
    document.write(`El ${numero} es divisible por 5.`);
} else if (numero % 7 === 0) {
    document.write(`El ${numero} es divisible por 7.`);
} else {
    document.write(`El ${numero} no es divisible ni por 2, ni por 3, ni por 5, ni por 7.`);
}