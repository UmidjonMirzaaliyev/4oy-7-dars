// 1-masala

// function getMonthName(monthNumber) {
//     let monthName;

//     switch(monthNumber) {
//       case 1:
//         monthName = "Yanvar";
//         break;
//       case 2:
//         monthName = "Fevral";
//         break;
//       case 3:
//         monthName = "Mart";
//         break;
//       case 4:
//         monthName = "Aprel";
//         break;
//       case 5:
//         monthName = "May";
//         break;
//       case 6:
//         monthName = "Iyun";
//         break;
//       case 7:
//         monthName = "Iyul";
//         break;
//       case 8:
//         monthName = "Avgust";
//         break;
//       case 9:
//         monthName = "Sentabr";
//         break;
//       case 10:
//         monthName = "Oktabr";
//         break;
//       case 11:
//         monthName = "Noyabr";
//         break;
//       case 12:
//         monthName = "Dekabr";
//         break;
//       default:
//         monthName = "Noto'g'ri oy raqami. Iltimos, 1 va 12 orasida raqam kiriting.";
//     }

//     return monthName;
//   }

//   let monthNumber = 5;
//   let monthName = getMonthName(monthNumber);
//   console.log(monthName);

// 2-masala

// function getGrade(score) {
//   let grade;

//   switch (true) {
//     case score >= 90 && score <= 100:
//       grade = "A";
//       break;
//     case score >= 80 && score < 90:
//       grade = "B";
//       break;
//     case score >= 70 && score < 80:
//       grade = "C";
//       break;
//     case score >= 60 && score < 70:
//       grade = "D";
//       break;
//     case score >= 0 && score < 60:
//       grade = "F";
//       break;
//     default:
//       grade = "Noto'g'ri ball. Iltimos, 0 va 100 orasida ball kiriting.";
//   }

//   return grade;
// }

// let score = 85;
// let grade = getGrade(score);
// console.log(grade);

// 3-masala

// function getGreetingMessage(time) {
//   let message;

//   switch (true) {
//     case time >= 5 && time < 12:
//       message = "Xayrli tong";
//       break;
//     case time >= 12 && time < 17:
//       message = "Xayrli kun";
//       break;
//     case time >= 17 && time < 21:
//       message = "Xayrli kech";
//       break;
//     case time >= 21 && time <= 24:
//     case time >= 0 && time < 5:
//       message = "Xayrli tun";
//       break;
//     default:
//       message = "Noto'g'ri vaqt. Iltimos, 0 va 24 orasida vaqt kiriting.";
//   }

//   return message;
// }

// let time = 14;
// let greeting = getGreetingMessage(time);
// console.log(greeting);

// 4-masala

// function askForNumber() {
//   let correctNumber = 42;
//   let guessedNumber;

//   do {
//     guessedNumber = parseInt(prompt("Iltimos, to'g'ri raqam kiriting:"));
//     if (guessedNumber !== correctNumber) {
//       console.log("Noto'g'ri raqam. Iltimos, qayta urinib ko'ring.");
//     }
//   } while (guessedNumber !== correctNumber);

//   console.log("Tabriklayman! Siz to'g'ri raqamni topdingiz:", correctNumber);
// }

// askForNumber();

// 5-masala

// function printEvenNumbers() {
//     let number = 0;

//     while (number <= 20) {
//       if (number % 2 === 0) {
//         console.log(number);
//       }
//       number++;
//     }
//   }

//   // Usage:
//   printEvenNumbers();

// 6-masala

// function promptUntilStop() {
//   let message;

//   do {
//     message = prompt(
//       "Iltimos, xabar kiriting ('stop' yozish orqali to'xtatabilasiz):"
//     );
//     if (message !== null) {
//       console.log("Siz kiritgan xabar:", message);
//     }
//   } while (message !== "stop");
// }

// promptUntilStop();

// 7-masala

// function findAverage(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   let average = sum / numbers.length;

//   return average;
// }

// let numbers = [5, 10, 15, 20, 25, 30, 35, 40];
// let average = findAverage(numbers);
// console.log("Berilgan sonlar o'rtacha qiymati:", average);
