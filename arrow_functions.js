let sum_og = function(a,b) {return a + b}  //función de las old

let sum_arrow_function = ( a,b ) => a + b;

const boolean = true;

let myFunc = boolean ?
    () => { console.log('True')} :
    () => { console.log('False')}

console.log('boolean, myFunc()', boolean, myFunc())