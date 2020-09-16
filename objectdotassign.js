let myobj = {
    firstname: 'Daniyal'
}
let myobj2 = {
    lastname: 'Sadiq'
}

// let finalobj = {
//     ...myobj,
//     ...myobj2
// }
// console.log(finalobj);

// let anotherfinalobj = Object.assign({}, myobj, myobj2);
// console.log(anotherfinalobj);

let newobj = Object.assign(myobj, myobj2);
myobj2.lastname = 'dawood'
console.log(newobj);
console.log(myobj2);


