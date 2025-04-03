//undefined type

let counter;
console.log(counter);

//null type

let obj = null;
console.log(typeof obj); // object

//number type

let num = 12;

let a = 12.4;

//NaN

console.log('a'/2);
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false

//String type

let str = "Hello";
console.log(str);

let message = 'I\'m also a valid string'; // use \ to escape the single quote (')
console.log(message);

//Strings are immutable
let s = 'JavaScript';
s[0] = 'j';
console.log(s)

//Boolean type

let b = false;
console.log(typeof b);
console.log(Boolean());

console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean(1));

//symbol type

let symbol = Symbol();
console.log(symbol);

console.log(Symbol()==Symbol);

//bigint type

let largeNum = 719925491n;
console.log(typeof(largeNum)); // 'bigint'


//Object Type

let person = {
    name : 'sayali',
    age:25,
    city:'Pune'
}
console.log(person);
person.marks = 98;
