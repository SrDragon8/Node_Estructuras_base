//creación de objetos en java script
//JSON = JavaScript Object Notation

let user ={}
console.log('user', user)

user =
{
    address: {}
}

console.log('user', user)

user =
{
    adress:
    {
        street : 'Random Street Value'
    }
}

console.log('user', user)
console.log('colony', user.adress.colony?.municipality) //si algo que no exciste busca entrar en algo que no exciste truena, si se pregunta si hay x cosa que no exciste y si si busque x no truena
// al no excistir colony en este momento sale undefined

user =
{
    adress:
    {
        street : 'Random Street Value',
        colony:
        {
            municipality: '1'
        }
    }
}

console.log('colony', user.adress.colony?.municipality)