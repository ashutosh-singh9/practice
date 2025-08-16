// Trim--------------------------------------------

// let name = "             Ashutosh                ";
// console.log(name.trim());
// console.log(name.length);
// let friend = name.trim();

// indexof---------------------------------------------------

// let str ="Ilovecoding";
// str.indexOf("o") //2
// str.indexOf("j"); //-1
// str.indexOf("love"); //1


// slice----------------------------------------------------------

// let str ="Ilovecoding";
// str.slice(5,8); //cod
// str.slice(4); //ecoding
// str.slice(-6) = str.slice(length-6) =str.slice(11-6) //coding
// str.slice(-6, -4) //co
// // (includes , does not include) 
// // (joh chahiye uska index , jaha tk chahiye + 1 )

// replace---------------------------------------------------

// let name = "ilovecoding";
// name.replace("love","hate") //ihatecoding
// name.replace("l","h") //ihovecoding

// repeat--------------------------------------------------

// let str="mango ";
// str.repeat(3) 

// // practice qs 1--------------------------------------------------------

// (i)

// let msg ="                     help!";

// // method1
// trimmedMsg=msg.trim();
// upperCasedtrimmedMsg=trimmedMsg.toUpperCase();
// // method2
// trimMsg=msg.trim().toUpperCase();

// (ii)

// coll
// 2
// OurCollege

// (iii)

// let name="ApnaCollege";
// sliced = name.slice(4).replace("l","t").replace("l","t")

// array---------------------------------------------------------------------

// // let names = ["Ashu", "Krishna","Lahar","Sakshi"]
// let emp =[];
// emp[1]="Ashu";
// emp[1]="Black";
// // (2) [empty, 'Black']
// emp[10]="white";
// // (11) [empty, 'Black', empty × 8, 'white']

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits.indexOf("banana")); // 1
// console.log(fruits.indexOf("kiwi"));   // -1
// console.log(fruits.indexOf("apple"));   // 0

// let marks =[55,67,100,100]

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// arr1.concat(arr2);