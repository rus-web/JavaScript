

let userName = [
    userRuslan = {
        firstName: 'Ruslan',
        LastName: 'Tinaev',
        age: 24,
        amountCash: 15800,
    },
    userArtem = {
        firstName: 'Artem',
        LastName: 'Petrov',
        age: 21,
        amountCash: 21000,
    }
]

let request = prompt('What is your name?')
let request2 = prompt('What is our surname')
let request3 = +prompt('How old are you?')
let request4 = +prompt("Specify the amount?")

if (request === userRuslan.firstName && 
    request2 === userRuslan.LastName && 
    request3 === userRuslan.age && 
    request4 <= userRuslan.amountCash
)
    {
    let isUser1Ready = confirm("Do you want to withdraw " + request4 + " RUB?")
    console.log('Cash ready Ruslan')
} else if (
    request === userArtem.firstName && 
    request2 === userArtem.LastName && 
    request3 === userArtem.age && 
    request4 <= userArtem.amountCash
){
    let isUser2Ready = confirm("Do you want to withdraw " + request4 + " RUB?")
    console.log('Cash ready Artem')
} else {
    console.log('Eror')
}


