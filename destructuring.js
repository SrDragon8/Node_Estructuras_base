//destructurar funciones y objetos
let arr = ['Luis', 'Esteban', 'Haro']

//const firstName = arr[0]   //vieja forma de
//const firstName = arr[1]

const [ firstName, lastName ] = arr;

//console.log('firstName, lastName', firstName, lastName)

let arr2 = ['Luis', 'esteban', 'Haro']

//const firstName = arr[0]   //vieja forma de
//const firstName = arr[1]

const [ firstName2, , lastName2] = arr2;
//console.log('My new vars', firstName2, lastName2)

let [a,b,c] = 'x,y,z'
let mySet = new Set(1, 1, 3)
let [one, two, three] = mySet

console.log('mySet', mySet)

let user = 
{
    userName: 'Luis',
    userLastName: 'Haro'
    // userPhone = '4'
}

const {userName} = user;
console.log('userName', userName)

const { userLastName : apellido, userPhhone = 5555555555} = user;
//const apellido = user.userLastName

//console.log('apellido', apellido)
console.log('userPhome', userPhone)

//console [userName, userLastName =]
const user2 =
{
    //Spread Operator
    ...user,
    userName: 'Jose',
    nationality: 'Mex'
}

console.log('user2', user2)

const { nationality, ...rest} = user2;
console.log('rest', rest)

const item = 
{
    itemName: 'Casa',
    itemDescription:
    {
        size: 14,
        color: red
    }
}

const { itemName: {size} } = item;
console.log('size', size)
console.log('clr', clr)

const myFunction = ({itemName}) => 
{
    console.log('itemName', itemName)
}
console.log('myFunction(user)',myFunction(item))

//5580107027