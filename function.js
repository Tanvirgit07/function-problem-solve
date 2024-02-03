// function mul(a,b,c,d){
//     return(a*b*c*d);
// }
// let paar = mul(1,2,3,4);
// console.log(paar);


// function checkEvenOrOdd(array){
//     let containerEven = [];
//     let containerOdd = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             containerEven = containerEven.concat(array[i])
//         }
//         else{
//             containerOdd = containerOdd.concat(array[i])
//         }
//     }
//     console.log(containerEven);
//     console.log(containerOdd);
// }
// checkEvenOrOdd([10,33,44,23]);


// function checkEvenOrOdd(a){
//     if(a % 2 == 0){
//         return a/2;
//     }
//     else{
//         return a*2; 
//     }
// }
// const x = checkEvenOrOdd(33);
// console.log(x);

// function average(array){
//     let avg;
//     let sum = 0;
//     const length = array.length;
//     console.log('Length of the array is : ',length);
//     for(let num of array){
//         sum = sum + num;
//         avg = sum / length;
//     }
//     return avg;
// }
// const number = average([10,11,12,13,14,15]);
// console.log('Average the element of array : ',number);

// function countZero(array){
//     let n = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] == 0){
//             n = n + 1;
//         }
//     }
//     return n;
    
// }
// const result = countZero([0,1,0,1,0,0,0,1,1,0])
// console.log('Number of zero is : ',result);


// function sentence(str){
//     let n = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === '0'){
//             n = n + 1;
//         }
//     }
//     return n;
    
// }
// const countZero = sentence("0010101010");
// console.log(countZero);

// function evenOrOddCheck(number){
//     if(number % 2 == 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }
// let checkEvenOrOdd = evenOrOddCheck(3);
// console.log(checkEvenOrOdd);