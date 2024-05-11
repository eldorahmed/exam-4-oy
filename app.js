// imtihon
// 1-variant

// 1-masala

// let str = "To be or not to be ";
// function removeFirstOccurrences(str, value) {
//   let result = str.replace(value, "");
//   return result;
// }
// console.log(removeFirstOccurrences(str, "not"));

// 2-masala

// let str = "<div>";
// let result = "";
// function unbracketTag(str) {
//   for (i = 1; i < str.length - 1; i++) {
//     result += str[i];
//   }
//   return result;
// }

// console.log(unbracketTag(str));

// 3-masala

// let count = 0;
// function isPrime(num) {
//   for (i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     console.log("Tubson");
//   } else {
//     console.log("Tubson emas");
//   }
// }
// isPrime(11);
// isPrime(9);

// 4-masala

// function group(array, keySelector, valueSelector) {
//   const result = {};

//   array.forEach((item) => {
//     const key = keySelector(item);
//     const value = valueSelector(item);
//     if (!result[key]) {
//       result[key] = [];
//     }
//     result[key].push(value);
//   });
//   return result;
// }
// const data = [
//   { country: "Belarus", city: "Brest" },
//   { country: "Russia", city: "Omsk" },
//   { country: "Russia", city: "Samara" },
//   { country: "Belarus", city: "Grodno" },
//   { country: "Belarus", city: "Minsk" },
//   { country: "Poland", city: "Lodz" },
// ];
// const result = group(
//   data,
//   (item) => item.country.toLowerCase(),
//   (item) => item.city
// );
// console.log(result);

// 5-masala

// let sum = 0;
// function getSumBetweenNumbers(n1, n2) {
//   for (i = n1; i <= n2; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(getSumBetweenNumbers(1, 9));

// 6-masala

// let arr = [2, 3, 4, 5, 6, 2, 2, 5, 5];
// let newArr = [];
// function getElementsOneTime(arr) {
//   arr.forEach((element) => {
//     if (arr.indexOf(element) == arr.lastIndexOf(element)) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// }
// console.log(getElementsOneTime(arr));

// 7-masala

// let newArr = [];
// let arr = [17, 4, 3, 9, 16, 77, 77, 8, 2, 3, 25];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== arr[i + 1]) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// 8-masala

// let newArr = [];
// let count = 0;
// let arr = [17, 4, 9, 16, 77, 8, 2, 3, 25];
// function deleteElementWithIndex(arr, k, m) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i < k || i > m) {
//       newArr.push(arr[i]);
//       count++;
//     }
//   }
//   return newArr;
// }
// console.log(deleteElementWithIndex(arr, 1, 3), count + "ta");

// 9-masala

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];
// books.forEach((el, index) => {
//   if (el.alreadyRead == true) {
//     console.log(
//       index + 1 + ". " + el.author + "ning " + el.title + " kitobi o'qilgan"
//     );
//   } else {
//     console.log(
//       index + 1 + ". " + el.author + "ning " + el.title + " kitobi o'qilmagan"
//     );
//   }
// });

// 10-masala

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// let sum = 0;
// products.forEach((el) => {
//   let result = (el.price - (el.price / 100) * el.discount) * el.quantity;
//   sum += result;
//   console.log(result);
// });
// console.log("jami:", sum, "sum");
