function PalindromoRecursivo(w)
{

    // Buscara cualquier carácter en una cadena que no sea una letra mayúscula(`A-Z`, `a-z`, `0-9`)
    // El modificador `g` hace la búsqueda globar, es decir, no se detendra después de encontrar la primera coincidencia
    var re = /[^A-Za-z0-9]/g; 

    w = w.toLowerCase().replace(re, '');

    // Caso base: una cadena vacía o una cadena de un solo carácter siempre es un palíndromo
    if(w.length <= 1)
    {
        return true;
    }

    if(w[0].toLowerCase() !== w[w.length - 1].toLowerCase())
    {
        return false
    }

    // Llama recursivamente con la subcadena que excluye el primer y último carácter
    return PalindromoRecursivo(w.slice(1, -1));

}

console.log(PalindromoRecursivo("never odd or even"));