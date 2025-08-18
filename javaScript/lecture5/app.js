// let student1 = {
//     name: "Ashutosh Singh",
//     class: "C11",
//     marks: 97,
//     cgpa: 8.7,
//     color: ["Red","blue"],
// };


// {name: 'Ashutosh Singh', class: 'C11', marks: 97, cgpa: 8.7}
// cgpa: 8.7
// class: "C11"

// color: Array(2)
// 0: "Red"
// 1: "blue"
// length: 2

// marks: 97
// name: "Ashutosh Singh"
// [[Prototype]]: Object
// order in alphabetic order

//acces contnent -> method 1 -> object["key"];
// student1["color"]
// (2) ['Red', 'blue']
// 0: "Red"
// 1: "blue"
// length: 2
// [[Prototype]]: Array(0)

// -> method 2 -> object.keys; {considered better}
//same output


// > student1
// {name: 'Ashutosh Singh', class: 'C11', marks: 97, cgpa: 8.7, color: Array(2)}
// > let a = "cgpa";
// undefined
// > student1[a];
// 8.7

// const a= {
//     1:"a",
//     2:"b",
//     null:"c",
//     true:"d",
//     undefined:"e"
// };

//to update the value of existing key/property
// access the key -> then change it
// student1.cgpa = 8.3;
//to make a new pair of property
// student1.gender = "male";
//to delete the property
// delete student1.cgpa;

// nested Object-->
// let people = {
//     person1: {
//         name: "Ashutosh",
//         age: 15,
//         address: {
//             street: "MG Road",
//             city: "Delhi",
//             country: "India"
//         }
//     },
//     person2: {
//         name: "Simran",
//         age: 20,
//         address: {
//             street: "Park Street",
//             city: "Kolkata",
//             country: "India"
//         }
//     },
//     person3: {
//         name: "Raj",
//         age: 25,
//         address: {
//             street: "Churchgate",
//             city: "Mumbai",
//             country: "India"
//         }
//     }
// };

// // Accessing values
// console.log(people.person1.address.city); // Delhi
// console.log(people.person2.name); // Simran
// console.log(people.person3.address.country); // India


// //Array of Objects
// let people = [
//     {
//         name: "Ashutosh",
//         age: 15,
//         address: {
//             street: "MG Road",
//             city: "Delhi",
//             country: "India"
//         }
//     },
//     {
//         name: "Simran",
//         age: 20,
//         address: {
//             street: "Park Street",
//             city: "Kolkata",
//             country: "India"
//         }
//     },
//     {
//         name: "Raj",
//         age: 25,
//         address: {
//             street: "Churchgate",
//             city: "Mumbai",
//             country: "India"
//         }
//     }
// ];

// Accessing values

// console.log(people[0].address.city); // Delhi
// console.log(people[1].name);         // Simran
// console.log(people[2].address.country); // India


// for(;;){
//     let num = Math.floor(Math.random()*100)+1;
//     console.log(num)

//     if(num === 100){
//         console.log("🎯 Got 100! Loop stopped.");
//         break;
//     }
// }

