

var userName = [
    userRuslan = {
        firstName: '1',
        LastName: '1',
        age: 1,
        amountCash: 1,
    },
    userArtem = {
        firstName: 'Artem',
        LastName: 'Petrov',
        age: 21,
        amountCash: 21000,
    }
]

var request = prompt('What is your name?')
var request2 = prompt('What is our surname')
var request3 = +prompt('How old are you?')
var request4 = +prompt("Specify the amount?")

if (request === userRuslan.firstName && 
    request2 === userRuslan.LastName && 
    request3 === userRuslan.age && 
    request4 <= userRuslan.amountCash
)
    {
    const isUser1Ready = confirm("Do you want to withdraw " + request4 + " RUB")
    console.log('Cash ready Ruslan')
} else if (
    request === userArtem.firstName && 
    request2 === userArtem.LastName && 
    request3 === userArtem.age && 
    request4 <= userArtem.amountCash
){
    const isUser2Ready = confirm("Do you want to withdraw " + request4 + " RUB")
    console.log('Cash ready Artem')
} else {
    console.log('Eror')
}


