// // // // // // // console.log("I am present");
// // // // // // const x = 'global';
// // // // // // function test(){
// // // // // //     const x = 'local';
// // // // // //     console.log(x);
// // // // // // }
// // // // // // test();
// // // // // // console.log(x);

// // // // // const user = {
// // // // //     name: 'Stella',
// // // // //     age: 25,
// // // // // }
// // // // // console.log(user.age);

// // // // let score = 0;
// // // // for(let i = 0; i <= 3; i ++) {
// // // //     score += i;
// // // //     console.log(score);
// // // // }


// // // function greet (name){
// // //     return "hello "+ name;
// // // }
// // // console.log(greet("anna"));

// // const num = [1,2,3];
// // const double = num.map(function(n) {
// //     return n * 2;
// // });
// // console.log(double);

// const greet = (name) => {
//     return "Hello "+ name;
// }
// //greet("Amina");
// console.log(greet("Amina"));

const user = {name: 'Alice',
    age: 25,
    city: 'Yaoundé'
}

const {name, age, city} = user;

console.log(name);

const num = [1,2,3,4,3,5,6,8,9,7,12,10,15];

const [first, second,...rest] = num;
