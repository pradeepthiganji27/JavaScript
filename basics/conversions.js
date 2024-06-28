let score = "33"
let score1 = "33abc"
console.log(typeof score);
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); //33

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "deepu" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

// ------------------operations----------------
let value = 3
let negVal = -value
console.log(negVal)

let str1 = "hello"
let str2 = "deepu"

let str3 = str1 + str2
console.log(str3); // hellodeepu

console.log("1" + 2) //12
console.log(1 + "2");//12
console.log("1" + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32