// let age: number = 20;
// if(age >= 50)
//   age += 10;
// console.log(age)

// fundamentals

let sales: number = 123_456_789; //in typescript we can use _ to separate numbers,
//sales variable is annotated with number type
//let sales = 123_456_789;  type inference will be used here and sales will be of type number
// but if no value is assigned to sales, it will be of type any

let course: string = "Typescript";
let is_published: boolean = true;

//The any type is a powerful way to work with existing JavaScript,
//  allowing you to gradually opt-in and opt-out of type-checking during compilation.

//implicit any if turned false in tsconfig.json file compiler
// function render(value) {
//   return value;
// }

// const items: number[] = [1, 2, 3, 4, 5];
// items.push('6'); //error

//Tuples   - fixed length array
// let person: [string, number] = ['John', 25];
// person = [25, 'John']; //error
// person = ['John', 25, 'Doe']; //error
// person.push('Doe'); //error in typescript 4.0
//recomended to use tuple for 2, otherwise it will cause complexity

//enums

//use Pascal casing for enum names and members
const enum Size {
  Small = 1,
  Medium,
  Large,
} //by default starts from 0 and increments by 1
// if the frist value is assigned, the rest will be incremented by 1
//if string is assigned, the rest have to be assigned too
// if const is used the compiler will generate a more efficient code
let mySize: Size = Size.Medium;
console.log(mySize);

//functions
//annotating the return type is optional but recommended

// function calculateTax(income: number, taxYear: number = 2022): number {
//   //no unuesd local variables
//   //   let x;s

//   if ((taxYear) < 2022) return income * 0.2;
//   //if noImplicitReturns is turned on, a return statement is required
//   //undefined is returned if no return statement is used
//   return income * 1.3;
// }
// //detecting unused parameters

// calculateTax(100);

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (data: Date) => void;
// } = {
//   id: 1,
//   name: "Net",
//   retire: (data: Date) => {
//     console.log(data);
//   },
// };

// employee.id = 2; //error due to readonly
// employee.name = "Net";

// console.log(employee);

// type Days = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

// let today: Days = "Monday";
