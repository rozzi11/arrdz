// 1.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(`0 - это ноль.`);
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {   
//         console.log(`${arr[i]} - четное число.`);
//     } else {
//         console.log(`${arr[i]} - нечетное число.`);
//     }    
// }

// 2.

// const array = [1, 2, 3, 4, 5, 6, 7];
// array.splice(3, 2);
// console.log(array);

// 3.

// function randomArray(length) {
//     const arr = [];
//     for (let i = 0; i < length; i++) {
//       const randomNumber = Math.floor(Math.random() * 10);
//       arr.push(randomNumber); 
//     }
//     console.log(arr);
    
//     let sum =0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];       
//     }
//     console.log(`Сумма элементов массива равна - ${sum}`);
    
//     const min = Math.min(...arr);
//     console.log(`Минимальное число массива - ${min}`);

//     let num3 = 0
//     if (arr.find((element) => element === 3)) {
//         console.log(`В массиве ecть цифра 3`);
//     } else {
//         console.log(`В массиве нет цифры 3`);
//     }
// }
// randomArray(5);

// 4.


// for (let i = 0; i < 20; i++) {
//     let line = ''
//     for(let j = 0; j < i; j++) {
//       line += 'x'
//     }
//     console.log(`${line}`)
//   }