function convertDecimalToHexa(n) {
  // Caso base: n es menor o igual a 0
    if (n <= 0) {
    return '0';
  }

  let hexadecimal = '';

  // Obtener residuo de la división por 16
  let residuo = n % 16;

  if (residuo < 10) {
    // Si el residuo es un digito decimal, agrégalo al inicio
    hexadecimal = residuo + hexadecimal;
  } else {
    //Si el residuo es mayor a 10, conviertelo a letra hexadecimal
    hexadecimal = String.fromCharCode(65 + residuo - 10) + hexadecimal;
  }

  n = Math.floor(n / 16);

  return convertDecimalToHexa(n) + hexadecimal;
}

const numeroDecimal = 305;
const result = convertDecimalToHexa(numeroDecimal);
console.log(`El número ${numeroDecimal} en hexadecimal es: 0x${result}`);
