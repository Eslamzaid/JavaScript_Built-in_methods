//! constructor
var fruitCons = ["Banana", "Apple", "Watermelon"];
console.log(fruitCons);
//? Returns the constructor function -for an object
//* Will return = [ 'Banana', 'Apple', 'Watermelon' ]

//! length
var fruitLeng = ["Banana", "Apple", "Watermelon"];
console.log(fruitLeng.length);
//* Will return 3
fruitLeng.length = 1;
console.log(fruitLeng);
//* Will return ['Banana']
//? Sets or returns the number of elements in an array

//! prototype
//? This constructor allows you to add new properties and methods to the Array().object


console.log('-----------concat----------------')


//! concat
var fruitCon1 = ["Messi", "mbappe"];
var fruitCon2 = ["neymar"];
const addThem = fruitCon1.concat(fruitCon2);
console.log(addThem);
//? is used to join two or more arrays , it does not change the array, it create a new one.


console.log('-------------copyWithIn--------------')


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


console.log('-------------entries--------------')


//! entries
const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
//? returns an array iterator obj/arr with key-value pairs


console.log('-------------every--------------')


//! every()
var ages = [2, 4, 6, 8, 10];
const checkAdult = () => {
  return ages > 6;
};
console.log(ages.every(checkAdult));
// false
//? check if all elements in an array pass a test(provided as a function)


console.log('-------------fill--------------')


//! fill()
var mango = ["Hello", "this", "is", "orange"];
var res = mango.fill("Apple", 3);
console.log(res);
// ['Hello', 'this', 'is', 'Apple']
//?Fills the specified in an array with a static value, you can specify the position of where to start and end the filling.


console.log('-------------filter--------------')


//! filter()
const checkAdu = (element) => {
  return element >= 15;
};

var ages = [10, 15, 20, 25];
var res = ages.filter(checkAdu);
console.log(res);
//* -> [15, 20, 25]
//? creates an array filled with all array elements that passes a test


console.log('------------find---------------')


//! find()
let num = [1, 2, 3];
let letFind = num.find((element) => element > 2);
console.log(letFind);
//* -> 3
//? returns the value of the first element in an array that passes a test


console.log('-------------findIndex--------------')


//! findIndex()
const findAge = [10, 20, 30, 40, 50];
const LetsFind = findAge.findIndex((element) => {
  return element > 40;
});
console.log(LetsFind);
//* --> 4
//? returns the index of the first element in an array that pass a test.


console.log('------------forEach---------------')


//! forEach()
const ForEachBB = [1, 2, 3, 4, 5];
const letsdoId = ForEachBB.forEach((element, index) =>
  console.log(
    `The element ${element} has been multiplied by it's index which is ${index} and the result is = ${
      element * index
    }`
  )
);
console.log(letsdoId);
//* --> The element 1 has been multiplied by it's index which is 0 and the result is = 0
//* --> The element 2 has been multiplied by it's index which is 1 and the result is = 2
//* --> The element 3 has been multiplied by it's index which is 2 and the result is = 6
//* --> The element 4 has been multiplied by it's index which is 3 and the result is = 12
//* --> The element 5 has been multiplied by it's index which is 4 and the result is = 20
//? calls a function once for each element in an array in order.



console.log('-------------includes--------------')


//! includes()
const theInludes = ["So", "Who", "Its", "going?"];
const seasearch = theInludes.includes("going?");
console.log(seasearch);
//* --> true
//? determine whether an array contains a specified element.


console.log('--------------isArray-------------')


//! isArray()
const issArray = [1, 2, 3, 4, 5];
const arr = Array.isArray(issArray);
console.log(arr);
//* --> tru
//? determins whether an object is an array


console.log('------------join---------------')


//! join()
const brejoin = ["Water", "Hydrogen Is equal to ???"];
const theUseJoin = brejoin.join(" + ");
console.log(theUseJoin);


console.log('--------------lastIndexOf-------------')


//! lastIndexOf()
const InArrayModeContent = [
  "Bravery and valor is one of the essential requirements to be a soldier",
  "my father was brave and",
  "valor",
];
const InStringModeContent =
  "Bravery and valor is one of the essential requirements to be a soldier my father was brave and valor";
const InArrayMode = InArrayModeContent.lastIndexOf("valor");
const InStringMode = InStringModeContent.lastIndexOf("valor");
console.log(InArrayMode); // * --> 2
console.log(InStringMode); // * --> 95
//? searches the array of the specified item


console.log('--------------map-------------')


//! map()
const letsMap = [1, 2, 3, 4, 5];
const valueMap = letsMap.map(
  (element, index) =>
    `the the old element => (${element} the new element = ${
      element * 2
    } and the index of the element == ${index}`
);
console.log(valueMap);
// * --> [
//     'the the old element => (1 the new element = 2 and the index of the element == 0',
//     'the the old element => (2 the new element = 4 and the index of the element == 1',
//     'the the old element => (3 the new element = 6 and the index of the element == 2',
//     'the the old element => (4 the new element = 8 and the index of the element == 3',
//     'the the old element => (5 the new element = 10 and the index of the element == 4'
//   ]


console.log('------------pop--------------')


//! pop()
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();
console.log(myFish);
//* ['angel', 'clown', 'mandarin' ]
//? removes the last element of an array.


console.log('------------push---------------')


//! push()
const meat = ["chicken", "beef"];
const tur = "Turkey";
const added = meat.push(tur);

console.log(meat);
//* -> [ 'chicken', 'beef', 'Turkey' ]
//? adds a new items to the end of an array.


console.log('-----------reduce----------------')


//! reduce!
const thered = [1, 2, 3, 4, 5];
const usingred = thered.reduce((init, currentvalue) => init + currentvalue);
console.log(usingred);
//* -> 15
//? executes a provided function for each value of the array [from Left to Right] and reduces the arrat to a single value.


console.log('-------------shift--------------')


//! shift()
const arr1 = [1,2,3]
const firstele = arr1.shift()

console.log(arr1);
//* -> [2,3]
console.log(firstele);
//* -> 1
//? remove the first item of an array