// 1. Advanced Types intro
// Type aliases
// Unions and intersections
// Type narrowing
// Nullable types
// The unknown type
// The never type

// 2. Type aliases

// Type aliases are a way to create a new name for a type in TypeScript.

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (data: Date) => void;
// };

// let employee = {
//   id: 1,
//   name: "Net",
//   retire: (data: Date) => {
//     console.log(data);
//   },
// };

// 3. Union Types

// function kgToLbs(weight: number | string): number {  //Union means either number or string in this case
//     //Narrowing
//     //Narrwoing is the process of refining the type of a variable
//     if(typeof weight === 'string'){
//         weight = parseFloat(weight);
//         return weight * 2.20462;
//     }
//     else{
//         return weight * 2.20462;
//     }
// }

// kgToLbs(100);
// kgToLbs('100');

//4 Intersection Types

// let weight: number & string; //Intersection means both number and string in this case
// type Draggable = {
//     drag: () => void;
// }

// type Resizable = {
//     resize: () => void;
// }

// type UIWidget = Draggable & Resizable;

// let textWidget: UIWidget = {
//     drag: () => {
//         console.log('dragging');
//     },
//     resize: () => {
//         console.log('resizing');
//     }
// }

//this is type intersection in action

// 5. Literal Types (exact or specific value)
// type Quantity = 50 | 100;
// let quantity: Quantity= 100;

// type Metric = 'kg' | 'lbs';

//6. Nullable types
// function greet (name: string | null){
//     if(name === null){
//         console.log('Hello');
//     }
//     else{
//         console.log(`Hello ${name.toUpperCase()}`);
//     }
// }

// greet(null);

//7. Optional chaining
// type Customer = {
//   birthDate?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthDate: new Date() };
// }

// let customer = getCustomer(0);
//can check if customer is null or undefined
// if (customer !== null && customer !== undefined)
//   console.log(customer.birthDate);

//or even better with optional chaining (optional property access operator)
// console.log(customer?.birthDate);
// console.log(customer?.birthDate?.getFullYear());

// we also have optional element access operator
// customer?.[0]

//finally we got optional call operator
// let log: any = null;

// log?.('Hello');

//log is called only if it is not null or undefined and refers to an actual function

//8 The nullish coalescing operator
// let speed: number | null = null;
// let ride = {
//     //falsey values are undefined, null, 0, false, NaN, '' so || operator will not work in this case
//     speed: speed ?? 60 // nullish coalescing operator
// }

//9. Type Assertion
// let phone = document.getElementById('phone') as HTMLInputElement;
// the 'as' keyword is used for type assertion,its a way to tell the compiler that you know more about the type of an expression than it does
// its not a type conversion, it only affects the type of the expression
//HTMLElement is base class for all HTML elements
//HTMLInputElement is a subclass of HTMLElement
// phone.value will work

//there is also another way to do type assertion
// let phone = <HTMLInputElement>document.getElementById('phone');
//<HTMLInputElement> is called angle bracket syntax

//10. The unknown type

// function render(document: unknown) {
//   //Narrwoing
//   if (typeof document === "string") {
//     document.toLocaleUpperCase();
//   }
// }

//using unknown is safer than using any
//unknown is a type-safe counterpart of any
//it forces you to do type checking before you can use it


//11. The never type
//example 1
// function processEvents(): never {
//     while(true){
//         //read messages from a queue
//     }
// }


// processEvents(); //this function will never return, it will run forever
// console.log("object")

//in this example never is used to indicate that the function will never return and the code after the function call will never be executed.
//compliler also uses never to detect unreachable code

//example 2

// function reject(): never {
//     throw new Error('Error');
// }

// reject();
// console.log('object'); 


//exercise

// type User = {
//     name: string;
//     age: number;
//     occupation?: string;
// }

// let users: User[] = [
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 24, occupation: 'Developer'},
// ];

// type Bird = {
//     fly(): void;
// }

// type Fish = {
//     swim(): void;
// }


// type Pet = Fish | Bird;


// let jimmy: Pet = {
//     fly(){
//         console.log('Jimmy is flying');
//     },
//     swim(){
//         console.log('Jimmy is swimming');
//     }
// } 