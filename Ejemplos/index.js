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
    let newString = "";

    for (let i = w.length - 1; i >= 0; i--) {
        newString = newString + w[i];
    }

    let equal = (w.toLocaleLowerCase() === newString.toLocaleLowerCase()) ? true : false;

    return equal;
}

console.log(palindromov2("ana"));