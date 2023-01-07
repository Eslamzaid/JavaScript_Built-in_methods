//! charAt()

var helloCharAt = "Hello friend!"
console.log(helloCharAt.charAt(1))

//? return the char.. at the specified 'Index'
//* Will return 'e' 0=H , 1=e


//! charCodeAt()

var helloCharCodeAt = "Hello world!"
console.log(helloCharCodeAt.charCodeAt(0))

//? return the unicode of the char at the specified index in a string.
//* Will return '72

//! String.fromCharCode()

var change = String.fromCharCode(65)
console.log(change)

//? converts unicode values into characters //Note: This is a static method of the STRING object and the syntax is always a string
//* will return "A"

//! concat()

var helloConcat = "Hello"
var world = " World"
console.log(helloConcat.concat(world))

//? to join two or more strings together
//* Will return "Hello World"

//! endsWith()

var helloEndsWith = 'hi'
const stWith = helloEndsWith.endsWith('i')
console.log(stWith)

//? determines whether a string ends with the specified character , it returns boolean
//* will return true 

//! includes()
var helloIncludes = 'hello'
const hIncludes = helloIncludes.includes('hello')
console.log(hIncludes)

//? determines wether a string contains the characters of a specified index returns boolean
//* will return true 


//! indexOf()
var helleIndexOf = 'hello'

const indexOff = helleIndexOf.indexOf('o')
console.log(indexOff)

//? returns the position of the first occurrence of the specified value in a string return -1 if not
//* will return 4