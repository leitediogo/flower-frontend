"use strict"

//FUNCTIONS
let tryitF = function (param1, param2) {
    let result = param1 + param2
    console.log(result) 
    console.log(arguments)//{ '0': 1, '1': 5 }
}
tryitF(1,5)

//arrow
let tryitA = (param1, param2) => {
    let result = param1 + param2
    console.log(result)
}
tryitA (3,6)

let logit = function () {
    console.log('logit')
}
logit()

let logitA = () => console.log('logitA')
logitA()

//Spread Operator
//let parts = ['shoulders', 'knees'];
//let lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]