// 1. დადებითი რიცხვების ჯამი
function sumOfPositive(...numbers){
    let numbersSum = 0;
    for(let item of numbers){
        if (item > 0) {
            numbersSum += item;
        }
    }
    return numbersSum;
 }
let result = sumOfPositive(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

// 2.ყველა რიცხვის ჯამი

function sumOfNumbers(...numbers1){
    let numbersSum1 = 0;
    for(let item1 of numbers1){
        numbersSum1 += item1;
    }
    return numbersSum1;
}
let result1 = sumOfNumbers(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result1);

// 3.
let user = {
    firstName: 'giorgi',
    lastName: 'saakadze',
    userAge: 32,
    isLoggedIn: true
  }

function printUserInfo(obj){
    if(obj.isLoggedIn){
        return `${obj.firstName} ${obj.lastName}`;
    } 
    return false;
}

let resultFunction = printUserInfo(user);
console.log(resultFunction);