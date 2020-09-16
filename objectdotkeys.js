let myObj = {
    name: 'Daniyal Sadiq',
    city: 'karachi',
    address: {
        address: 1
    }
}
let objectkeys = Object.keys(myObj);
    
for (let index = 0; index < objectkeys.length; index++) {
    console.log(myObj[objectkeys[index]]);
    
}

// console.log(objectkeys);