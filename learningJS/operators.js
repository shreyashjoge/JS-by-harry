// operators & expressions

console.log("Operators in JS")

let a = 10;
let b = 4;

// basic operations / arthematic operators

/* console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a * b = ", a * b)
console.log("a ** b = ", a ** b)  
console.log("a / b = ", a / b)
console.log("a % b = ", a % b)  // modulas

console.log("++a = ", ++a);  val = 11
console.log("a++ = ", a++);   // increment
console.log("--a = ", --a);   
console.log("a-- = ", a--);   // decrement
console.log("a = ", a); */ 

// Assignment Operators

let x = 2; 
x += 5     // same as x = x + 5
console.log("x is now ", x);

x -= 5     // same as x = x - 5
console.log("x is now ", x);

x *= 5     // same as x = x * 5
console.log("x is now ", x);

x /= 5     // same as x = x / 5
console.log("x is now ", x);

x %=5
console.log("x is now ", x);

x **= 5
console.log("x is now ", x);

// comparions operators
let com1 = 6;
let com2 = "7";
console.log("com1 == com2", com1 == com2);  // == equals to
console.log("com1 != com2", com1 != com2);  // != not equals to
console.log("com1 === com2", com1 === com2);  // === it also checks the datatype of value, as com 2 value is in string so it gives false
console.log("com1 !== com2", com1 !== com2);  // 

console.log("com1 > com2", com1 > com2);  // == equals to
console.log("com1 < com2", com1 < com2);  // == equals to
console.log("com1 >= com2", com1 >= com2);  // == equals to
console.log("com1 <= com2", com1 <= com2);  // == equals to

// Logical Operators
// it operates on boolean

let c = 5;
let d = 6;
console.log(c>d && c==5); // false && true = false
console.log(c<d && c==5); // true && true = true
                          // false && false = false
                          // true && false = false   / both condition should be true

console.log(c>d || c==5);  // false || ture = true   / symbol for or ||
console.log(c<d && c==5);  // true || true = true    / any 1 condition should be true 
                           // true || false = true
                           // false || false = false

// not operator !
console.log(!false);    // true ko false or false ko true
                    





