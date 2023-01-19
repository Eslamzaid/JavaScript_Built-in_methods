// ! assert()
let i = 500
i > 1000 ? console.log("Oh yes!") : console.assert(i = false, "Oh no!")


// ! count()
let HowManyTimes = () => {
    let hi = "times"
    console.count(hi)
    console.count(hi)
    console.count(hi)
}
console.count(HowManyTimes())

// * times: 1
// * times: 2
// * times: 3
// * default: 1

// ! clear()

console.clear()
//* Will clear the console


//! error()
let hi = 5
hi > 10 ? console.log("Yes it is!") : console.error("No it's not!")
// Will return an error if the input is wrong 


//! group() && groupEnd()
console.group()
console.log('Im in a group')
console.log('Im still in this group')
console.group()
console.log("Oh im in another group linked with the previous one")
console.groupEnd()

//* will create a group and then another one and ultimately will end the group
//? groupCollapse() is similar but with small changes


//! table.()
console.table(['hi', 'your', 'name'])
//* will return a table with index to all the above properties!


//! info()
console.info('this will write a message to the console')
//*Similar to .log() but with some small difference 

//! log()
console.log('this will write a message to the console')
//* This is the king of all consoles and no need to explain it


//! time() & timeEnd()
console.time()
console.log('this will write a message to the console')
console.log('this will write a message to the console')
console.log('this will write a message to the console')
console.timeEnd()

//* will make a timer and then will stop it

//! warn()
console.warn('Yoo stop right there you are breaking the rules')

//* writes a warning to the console  
