// const student = {
//     name: "ashu",
//     age: 19,
//     eng: 78,
//     maths: 88,
//     science: 60,
//     avg(){
//         console.log((eng+maths+science)/3);
//     }
// };

// try {
//   console.log(a);
// } catch(err) {
//   console.log("variable a doesn't exist");
//   console.log(err)
// }


// const student = {
//   name: "Ashu",
//   eng: 78,
//   maths: 88,
//   science: 60,
//   avg() {
//     try {
//       // ❌ Wrong way (will cause error)
//       console.log((eng + maths + science) / 3);
//     } catch (error) {
//       console.log("Error found:", error.stack);
//       console.log("Fixing it...");
//       // ✅ Correct way using this
//       console.log((this.eng + this.maths + this.science) / 3);
//     }
//   }
// };

// student.avg();

// console.log("Start");

// setTimeout(() => {
//   console.log("Hello Ashu 👋 after 2 seconds");
// }, 4000);

// console.log("End");

// ---------

// function intro (){
//     console.log("My Name Is Ashutosh singh")
// }

// console.log("Hello guys")

// setTimeout(intro,4000);

// console.log("How are you")

// let count = 15;

// let timer = setInterval(() => {
//   console.log(count);
//   count--;

//   if (count === 0) {
//     console.log("💥 Boom!");
//     clearInterval(timer); // stop interval
//   }
// }, 1000);

// let squ = x => x * x;


