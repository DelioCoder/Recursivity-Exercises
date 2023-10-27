function ReversoRecursivo(w)
{
    if(w.length <= 1)
    {
        return w;
    }

    const lastCharacter     = w.slice(-1);
    const restOfCharacters  = w.slice(0, -1);

    return lastCharacter +  ReversoRecursivo(restOfCharacters);

}

console.log(ReversoRecursivo("Hello"));