// function numberLoop() {
//     for(let i =0;i<=5;i++){
//         console.log(i);
//     }
// }

// numberLoop();

//practise qs1
// function poem() {
//   console.log(`The music was already turning sad,\n
//       those fresh-faced voices singing in a round \n
//             the lie that time could set its needle back \n

// and play from the beginning. Had you lived\n
//       to eighty, as you’d wished, who knows?—you might\n
//             have broken from the circle of that past\n

// more ours than yours. Never even sure\n
//       which was the truest color for your hair\n
//             (it changed with each photographer), we claimed\n

// you for ourselves; called you John and named\n
//       the day you left us (spun out like a reel—\n
//             the last broadcast to prove you’d lived at all)\n

// an end to hope itself. It isn’t true,\n
//       and worse, does you no justice if we call\n
//             your death the death of anything but you.`);
// }

// poem();

// Practise qs 2 roll a dice (1 to 6)

// function dice(){
//     console.log (Math.floor(Math.random() *6)+1)

// }

// dice();

// funtion with argument

// function dataInfo(name,age,role){
//     console.log(`Good Morning ${name}`)
//     console.log(`Your age is ${age} and your role is ${role}`)
// };

// dataInfo();

// Good Morning undefined
// Your age is undefined and your role is undefined

// dataInfo("ashu");

// Good Morning ashu
// Your age is undefined and your role is undefined

// dataInfo("ashu",19,"sde-ii")

// Good Morning ashu
// Your age is 19 and your role is sde-ii

// Practice qs 3

// function avg(a,b,c){
//     console.log(`Average of 3 numbers ${a} ${b} & ${c} is ${(a+b+c)/3}`)
// };

// avg(-5,-0.7,-9);

// avg
// ƒ avg(a,b,c){
//     console.log(`Average of 3 numbers ${a} ${b} & ${c} is ${(a+b+c)/3}`)
// }
// Math.random
// ƒ random() { [native code] }
//  [1,2,3,4].pop
// ƒ pop() { [native code] }

// Practice qs4

// function table(n){
//     for(i=1;i<=10;i++){
//         console.log(`${n} X ${i} = ${n*i}`)
//     }

// }

// let b =prompt("Enter the number")
// table(b);

// Practice qs 5

// (My Method)

// function add (n) {
//     return((n*(n+1))/2)
// };

// let a = add(7);
// console.log(a)

// (Mam's Method)

// function getSum (n) {
//     let sum = 0;
//     for(i=1 ; i<=n ; i++){
//         // sum = sum+i
//         sum += i;
//     }
//     return sum;
// }

// let a = getSum(7);

// function arrayCon () {
//     let a = "";
//     arr = ["ashu","rishi","sakshi","pihu","krishna"];
//     for(i=0;i<=arr.length-1;i++){
//          a = a+ arr[i];
//     };
//     return a;
// };

// let arr = ["ashu", "rishi", "sakshi", "pihu", "krishna"];

// function arrayCon(arr) {
//   let a = "";
//   for (i = 0; i <= arr.length - 1; i++) {
//     a = a + arr[i];
//   }
//   return a;
// }

// let app = 66;

// function blah (a,b){
// 	let app = a+b;
// 	console.log(app)
// }

// function HOF (func , n){  //Higher Order Functions
//     for(i=1;i<=n;i++){
//         func();
//     }
// }

// let greet = function (){
//     console.log("Hello");
// };

// HOF(greet,6)

// // 6 Hello

// HOF(function (){console.log("ashu")},20)

// function oddEvenTest(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("wrong request");
//   }
// }


// let calc = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     } 
// };