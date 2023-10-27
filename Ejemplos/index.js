function convertDecimalToHexa(n)
{

    let hexadecimal = '';

    while (n > 0)
    {
        let residuo = n % 16;
        
        if(residuo < 10)
        {
            hexadecimal = residuo + hexadecimal;
        }else {
            hexadecimal = String.fromCharCode(65 + residuo - 10) + hexadecimal;
        }

        n = Math.floor(n/16);
    }

    return hexadecimal;

}

// const numeroDecimal = 23761;
// const result = convertDecimalToHexa(numeroDecimal);
// console.log(`El número ${numeroDecimal} en hexadecimal es: 0x${result}`);

function palindromov1(w)
{

    let splitString = w.split("");

    let splitStringReverse = splitString.reverse();

    let joinSplitString = splitStringReverse.join("");

    return w.toLowerCase() === joinSplitString.toLowerCase();

}

// console.log(palindromov1('Ana'));

function palindromov2(w)
{
    // Buscara cualquier carácter en una cadena que no sea una letra mayúscula(`A-Z`, `a-z`, `0-9`)
    // El modificador `g` hace la búsqueda globar, es decir, no se detendra después de encontrar la primera coincidencia
    var re = /[^A-Za-z0-9]/g; 

    w = w.toLowerCase().replace(re, '');

    let newString = "";

    for (let i = w.length - 1; i >= 0; i--) {
        newString = newString + w[i];
    }

    console.log(newString);

    let equal = (w.toLocaleLowerCase() === newString.toLocaleLowerCase()) ? true : false;

    return equal;
}

console.log(palindromov2("never odd or even"));