//! constructor 
var fruitCons = ['Banana', 'Apple', 'Watermelon']
console.log(fruitCons)
//? Returns the constructor function -for an object
//* Will return = [ 'Banana', 'Apple', 'Watermelon' ]


//! length
var fruitLeng = ['Banana', 'Apple', 'Watermelon']
console.log(fruitLeng.length)
//* Will return 3
fruitLeng.length = 1
console.log(fruitLeng)
//* Will return ['Banana']
//? Sets or returns the number of elements in an array


//! prototype
//? This constructor allows you to add new properties and methods to the Array().object


//! concat
var fruitCon1 = ['Messi', 'mbappe']
var fruitCon2 = ['neymar']
const addThem = fruitCon1.concat(fruitCon2)
console.log(addThem)
//? is used to join two or more arrays , it does not change the array, it create a new one.


//! copyWithIn()
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
//?copies array elements to another position in the array, overwriting the existing values.



//! entries
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
//? returns an array iterator obj/arr with key-value pairs

