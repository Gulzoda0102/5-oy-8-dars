// const numbers = [1,12,43,58,69,89,22,55,60,62];
// const odd = [];
// const even = [];

// for ( let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//         even.push(numbers[i]);   
//  }else{
//   odd.push(numbers[i]);
// } 
// }
//     console.log((even,odd));   
 


// const pupile= ["Safina" , "Sitora" , "Gulzoda" , "Dilmuhammad" , "Mahmud" , "Azizbek"]
// for (const element of pupile) {
//     if (element.includes ("o")){
//         console.log(element);
//     }else{
//         console.log(`The name ${element} does not contain the letter  'o'.`);
//     }
// }















let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];


let containsN = [];
let doesNotContainN = [];

letterSearch.forEach(word => {
  if (word.includes('n')) {
    containsN.push(word);
  } else {
    doesNotContainN.push(word);
  }
});

console.log(containsN, "'n' harfi ishtirok etgan so'zlar");
console.log(doesNotContainN, "'n' harfi ishtirok etmagan so'zlar");



