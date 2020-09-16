let myobj = {
    firstname: 'daniyal',
    lastname: 'Sadiq',
    city: 'khi',
}
console.log(myobj);

let {lastname, ...restValues} = myobj
console.log(lastname, restValues);

