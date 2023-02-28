
const user = [{name:'Temo',age:25},
{name:'Lasha',age:21},
{name:'Ana',age:28}];

// function min_age(user){
//   let max_age = user[0].age;
//   console.log(max_age);
//   let ag_e;

//   for(let the of user){
//     if(the.age < max_age){
//       max_age = the.age;
//       ag_e = the.name;
//     }
//   }
//   return ag_e;

// }
// console.log(min_age(user));

// let a;
// let b;


// do{
//     let a = Math.floor(Math.random() * 6) + 1;
//     let b = Math.floor(Math.random() * 6) + 1;
//     console.log(a,b);

//     if(a == 3){
//         console.log('first player is winner' );
//     }else if(b == 3){
//         console.log('second player is winner')
//     }

// }while(a && b == 3);





    const new_array = [...user];
    console.log(user,new_array)

/////////////////////////////////////////
