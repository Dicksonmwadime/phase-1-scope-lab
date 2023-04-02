// Write your solution in this file!
var customerName = 'bob'
var bestCustomer
const leastFavoriteCustomer = 'chriss'

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}
upperCaseCustomerName()

function setBestCustomer () {
    bestCustomer = 'not bob'
}

setBestCustomer();

function overwriteBestCustomer (newName) {
    bestCustomer = newName
}

overwriteBestCustomer('maybe bob');

function changeLeastFavoriteCustomer (newName) {
    leastFavoriteCustomer = newName
}

changeLeastFavoriteCustomer('new name');
console.log(bestCustomer);