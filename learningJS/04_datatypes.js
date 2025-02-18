// NN BB SS U - primitive datatypes
// null number  Boolean BigInt  String Symbol  Undefined

let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("546") + BigInt("56")
let e = "dsaw"
let f = Symbol("i am a nice symbol")
let g = undefined

console.log(a, b, c, d, e, f, g);

// to know the data type of particular variable - typeof
console.log(typeof e);


// Objects / Non-primitive / reference datatypes

const item ={
    "dsaw" : true,
    "shreyash" : false, // if not applied , it shows error
    "hector" : 548,     // apply "" if you want, if not ans remains same
    458 : "cute"
}

console.log(item[hector]);  // item['hector'] or item["hector"] / gives same result

