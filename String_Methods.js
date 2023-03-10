//!  1 charAt()

var helloCharAt = "Hello friend!"
console.log(helloCharAt.charAt(1))
//? return the char.. at the specified 'Index'
//* Will return 'e' 0=H , 1=e



//!  2  charCodeAt()

var helloCharCodeAt = "Hello world!"
console.log(helloCharCodeAt.charCodeAt(0))
//? return the unicode of the char at the specified index in a string.
//* Will return '72



//!  3 String.fromCharCode()

var change = String.fromCharCode(65)
console.log(change)
//? converts unicode values into characters //Note: This is a static method of the STRING object and the syntax is always a string
//* will return "A



//!  4 concat()

var helloConcat = "Hello"
var world = " World"
console.log(helloConcat.concat(world))
//? to join two or more strings together
//* Will return "Hello World"



//!  5 endsWith()

var helloEndsWith = 'hi'
const stWith = helloEndsWith.endsWith('i')
console.log(stWith)
//? determines whether a string ends with the specified character , it returns boolean
//* will return true 



//!  6 includes()
var helloIncludes = 'hello'
const hIncludes = helloIncludes.includes('hello')
console.log(hIncludes)
//? determines wether a string contains the characters of a specified index returns boolean
//* will return true 



//!  7 indexOf()
var helleIndexOf = 'hello'

const indexOff = helleIndexOf.indexOf('o')
console.log(indexOff)
//? returns the position of the first occurrence of the specified value in a string return -1 if not
//* will return 4



//! 8 lastIndexOf()
var helleLastIndexOf = 'hello'

const hLastIndexOf = helleLastIndexOf.lastIndexOf('l')
console.log(hLastIndexOf)
//? return the position of the last occupance of a specified value in a string start from the end to the begging
//* will return 3



//! 9 localCompare()
var whoIsBigger1 = 'hello'
var whoIsBigger2 = 'world'

const whoIsBigger = whoIsBigger1.localeCompare(whoIsBigger2)
console.log(whoIsBigger)
//? compares two strings in the current locale is based on the language settings in the browser
//* -1 --



//! match()

var resMatch = 'EsElam'
const reg = /[A-Z]/g
const useMatch = resMatch.match(reg)
console.log(useMatch)
//? searches a  string for a match against a regular  expression, and returns the match as an Array object.
//* will return = ['E','E']




//! repeat()

var resRepeat = '200'
var useRepeat = resRepeat.repeat(2)
console.log(useRepeat)
//? returns a new string with a specified number of compiles of the str.
//* will return = 200200



//! replace()

var yourName = "what is your name"
var where = yourName.replace("what", "Eslam")
console.log(where)
//? searches a string for a specified value, or regular expression, returns a new string where the specified value are replaced.
//* will return = Eslam is your name



//! search()

var strSearch = "Create projects"
var resStr = strSearch.search("projects")
console.log(resStr)
//? searches a string for a specified value, and return the position fo the match.
//* will return = 7



//! slice()

var strSlice = "Hellow world"
var res = strSlice.slice(7)
console.log(res)
//? extracts parts of a string and return the extracted in a new string
//*Will return = world



//! split()

var numSplit = "one is the first number"
var resSplit = numSplit.split(" ")
console.log(resSplit)
//? is used to split a string into an array of substring
//*Will return = ['one','is','the','first','number']



//! startsWith()
var strStartsWith = "Hello world"
var resStartsWith = strStartsWith.startsWith("Helo")
console.log(resStartsWith)
//? determines wether a string begins with the characters of a specified string
//*Will return = false



//! substring()
var strSubstr = "Hello world"
var resSubstr = strSubstr.substring(1, 3)
console.log(resSubstr)
//? extracts parts of a string, beginning at the character at the specified position, nd returns the specified number of a character.
//*Will return = el



//! toLocalLowerCase()
var strToLocalLowerCase = 'HELLO WORLD'
var resToLocalLowerCase = strToLocalLowerCase.toLocaleLowerCase()
console.log(resToLocalLowerCase)
//?converts a string to lowercase, according to the host's current locale.
//* Will return = hello world


//! toLowerCase()
var strToLowerCase = "HELLO WORLD"
var resToLowerCase = strToLowerCase.toLowerCase()
console.log(resToLowerCase)
//? same as the above, but with less specification
//* Will return = hello world



//! toLocalUpperCase()
var strToLocalUpperCase = 'hello world'
var resToLocalUpperCase = strToLocalUpperCase.toLocaleUpperCase()
console.log(resToLocalUpperCase)
//? converts a  string to uppercase letters, according to the host's current locale.
//* Will return = HELLO WORLD



//! toUpperCase()
var strToUpperCase = 'hello world'
var resToUpperCase = strToUpperCase.toUpperCase()
console.log(resToLocalUpperCase)
//? same as the above, but with less specification
//* Will return = HELLO WORLD



//! trim() 
var strTrim = '              Hello            '
var resTrim = strTrim.trim()
console.log(resTrim)
// ? Removes the whitespace from both sides of a string doesn't change the original string.
//* Will return = Hello