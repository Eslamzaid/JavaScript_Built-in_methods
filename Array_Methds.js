//! constructor 
var fruitCons = ['Banana','Apple','Watermelon']
console.log(fruitCons)
//? Returns the constructor function -for an object
//* Will return = [ 'Banana', 'Apple', 'Watermelon' ]


//! length
var fruitLeng = ['Banana','Apple','Watermelon']
console.log(fruitLeng.length)
//* Will return 3
fruitLeng.length = 1
console.log(fruitLeng)
//* Will return ['Banana']
//? Sets or returns the number of elements in an array


//! prototype
//? This constructor allows you to add new properties and methods to the Array().object


//! concat
var fruitCon1 = ['Messi','mbappe']
var fruitCon2 = ['neymar']
const addThem = fruitCon1.concat(fruitCon2)
console.log(addThem)
//? is used to join two or more arrays , it does not change the array, it create a new one.