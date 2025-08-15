
// let potato = 30;
// let onions = 25;

// //method 1:
// console.log("Price of Potato is", potato ,"rs");
// console.log("Price of Onion is", onions , "rs");
// console.log("Your Total Bill is" , potato + onions , "rs" );


// //method 2:
// let potatoPrice = "Price of Potato is " + potato + " rs";
// console.log(potatoPrice);

// let onionPrice = "Price of Onion is " + onions + " rs";
// console.log(onionPrice);

// let totalPrice = "Your Total Bill is " + (potato + onions) + " rs";
// console.log(totalPrice);


// //method 3: (Template Literals)
// console.log(`Price of Potato is ${potato} rs`);
// console.log(`Price of Onion is ${onions} rs`);
// console.log(`Your Total Bill is ${potato+onions} rs`);



// //if statements-------

// let name = "ashutosh";

// if  (name == "ashutosh"){
//     console.log(`Welcome master ${name}`)
// }

// let a = 19;

// if (a>=18) {
//     console.log("Congratulations!!")
//     console.log("You are eligable for voting")
// }

// if (a>=21) {
//     console.log("You are eligable for marriage")
// }

// //Practic Qs-----------

// let color = "green";

// if (color == "green") {
//     console.log("Goooooooo!!")
// }

// if (color == "yellow") {
//     console.log("Slow down!!")
// }

// if (color == "red"){
//     console.log("stop!!")
// }

// // else if statement---------------------------

// let a = 21;

// if (a>=18){
//     console.log("You can vote!!")
// }

// if (a>=21){
//     console.log("You can marry!!")
// }

// if (a<18){
//     console.log("You cannot vote")
// }

// // output :
// // You can vote!!
// // You can marry!!


// // even if first statement is true it will 
// // still run till the last statement

// a = 21;

// if (a>=18){
//     console.log("You can vote!!")
// }

// else if (a>=21){
//     console.log("You can marry!!")
// }

// else if (a<18){
//     console.log("You cannot vote")
// }

// // output :
// // You can vote!!

// // if the the first statement is true it will 
// // stop and will not go further

// self practise qs

//  let marks = 0;
  
// if (marks >= 80){
//     console.log("A+")
// }
// else if (marks>70){
//     console.log("A")
// }
// else if (marks>60){
//     console.log("B")
// }
// else if (marks>50){
//     console.log("C")
// }
// else if (marks>40){
//     console.log("D")
// }

// else {
//     console.log("F")
// }


// Practise Qs 

// let size = prompt("Chooose the size: ");

// if (size == "XL" ){
//     console.log("Price is Rs. 250")
// }else if (size == "L" ){
//     console.log("Price is Rs. 200")
// }else if (size == "M" ){
//     console.log("Price is Rs. 100")
// }else if (size == "S" ){
//     console.log("Price is Rs. 50")
// }else{
//     console.log("invalid size")
// }

// // nested if else---------------------------------

// let marks = 89;

// if (marks >=33){
//     console.log("Pass")
//     if (marks >= 80 ){
//         console.log("O")
//     }
//     else {
//         console.log("A")
//     }

// }
// else{
//     console.log("F")
// }


// practice qs

// 1

// let g = "apple";

// if (g.charAt(0) == "a" && g.length>3){
//     console.log("It's a good String")
// }

// else{
//     console.log("It's not a good String")
// }

// 2

// truthy & falsy -------------

// if (NaN){
//     console.log("truth")
// }
// else {
//     console.log("false")
// }

// Question

// let day = 8;

// switch (day){
//     case 1:
//     console.log("Monday");
//     break
//     case 2:
//     console.log("Tuesday");
//     break
//     case 3:
//     console.log("Wednesday");
//     break
//     case 4:
//     console.log("Thursday");
//     break
//     case 5:
//     console.log("Friday");
//     break
//     case 6:
//     console.log("Saturday");
//     break
//     case 7:
//     console.log("Sunday");
//     break
//     default :
//     console.log("Invalid day")
// }
