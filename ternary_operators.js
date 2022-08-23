//Funtion
/* const add = (num1, num2) => 
{
    return num + 2;
}

TextDecoderStream('It works', () =>{
    const result = add(1,2);
    expect(result).toBe(3);
})

TextDecoderStream('It fails', () => {
    const result = add(1, 2);
    expect(result).toNotBe(5);
}) */

//no hacer demasiado complejo, hacer un código legible 
const condition = false;
const value1 = 1;
const value2 = 1;

/* let result;
if (condition)
{
    result = 3;
}
else
{
    result = 0;
} */

//simplificar todo lo superior con una línea

//operador ternario, condition es iguala  true ? si si es 3 si no es 0
let result = condition ? 3 : 0;
console.log('result', result)

//Multiple conditions
const age = 18
let mesage = (age > 3 ) ? 'Hello there you small one':
(age <18 ) ? 'Hello':
(age < 100 ) ? 'Ohh wow':
'Error not valid age';