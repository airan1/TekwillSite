// Проверяем четное или нечётное число

var number = 3

if (number % 2 === 0) {
    console.log(`${number} - это четное число.`);
  } else {
    console.log(`${number} - это нечетное число.`);
  }

// Проверяем аутентифицирован ли пользователь

const isLoggedIn = true; 

const message = isLoggedIn ? "Пользователь Аутентифицирован" : "Пользователь к сожалению не Аутентифицирован";

console.log(message);

// 3-е задание товар

var productPrice = 100;
var productNumber = 180;

var productAvb = true;

const totalProductPrice = (productPrice*productNumber);

if (productAvb == true) {
    console.log(totalProductPrice )
} else {
    console.log("Извините товара нет в наличии...")
}



// узнаем высокосный ли год

const thisYear = new Date().getFullYear(); 
let isLeapYear = false; 

if ((thisYear % 4 === 0 && thisYear % 100 !== 0) || thisYear % 400 === 0) {
  isLeapYear = true; 
}

if (isLeapYear) {
  console.log(`${thisYear} год высокосный.`);
} else {
  console.log(`${thisYear} год не высокосный`);
}

//countryname

function countryCodeName(countryCode) {
  let countryName;

  switch (countryCode) {
    case "MD":
      countryName = "Moldova";
      break;
    case "FR":
      countryName = "France";
      break;
    case "RO":
      countryName = "Romania";
      break;
    case "GB":
      countryName = "United Kingdom";
      break;
    case "AU":
      countryName = "Austria";
      break;
    default:
      countryName = "Страна не найдена";
  }
  return countryName;
}

const countryCode = "AU"; 
const countryName = countryCodeName(countryCode);

console.log(`Код  ${countryCode} является страной ${countryName}.`);


// продолжение

function TellFortune(N, Z, Y, X) {
  console.log(`You will be ${X}  in ${Y}, and will get married to ${Z} with ${N} kids`);
}

TellFortune(2, 'Катя', 'Лондон', 'Айтишник');
TellFortune(3, 'Виталик', 'Лиссабон', 'Психолог');
TellFortune(1, 'Денис', 'Кишинев', 'учитель');

// Калькулятор возраст щенка

function CalculatedDogAge(humanAge){
    var dogYear = humanAge * 7;

    console.log(`Вашей собачке ${dogYear} лет в собачьих годах!`);
}

CalculatedDogAge(5);
CalculatedDogAge(8);
CalculatedDogAge(4);

// Домашнаяя работа Nr.19

function displayObjectProperties(obj){
    for (const key in obj){
      console.log(`${key}: ${obj[key]}`);
    }
}
const myObjekt = {name:'John', age:30, city: 'New-York'};
displayObjectProperties(myObjekt);

// 2 Задание

function keyMyProject(object, keyNewCheck){
    for (const key in object){
        if(key === keyNewCheck){
          return true;
        }
      return false;
    }


    const myNewObject = {name: 'John', age: 30, city: 'New-York'} 
    const keyToCheck = 'age';

    const result = keyMyProject(myNewObject, keyNewCheck);
    console.log(result);
}


// 3 Задание

function concatenateObject(objs){
  let resultone = '';

  const values = Object.values(objs);

  let i=0;
  do{
    resultone +=values[i];
    i++;
  } while (i < values.length);

  return resultone;

}

  const myObject = { prop1: 'Hello', prop2: 'World', prop3: '!' };
  const concatenatedValue = concatenateObject(myObject);

  console.log(concatenatedValue);

  // 4 задание

  function countVowels(str) {
    str = str.toLowerCase();
  
    let count = 0; 
    let i = 0; 
  
    while (i < str.length) {
      const char = str[i];
  
 
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++; 
      }
  
      i++; 
    }
  
    return count; 
  }
  
  const inputString = "Hello, this is my homework 19";
  const vowelCount = countVowels(inputString);
  
  console.log(vowelCount); 
  
  // 5 Задание

  function calculateResultNotes(students) {
    const result = {}; 
  
    for (const student in students) {

      const grades = students[student];
      const sum = grades.reduce((acc, grade) => acc + grade, 0);
      const average = sum / grades.length;
  
      result[student] = `medium: ${average.toFixed(2)}`;
    }
  
    return result;
  }
  
  const grades = {
    John: [8, 7, 9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7],
  };
  
  const result = calculateResultNotes(grades);
  console.log(result);
  
  //6 задание

  function flippText(inputStringNew){
    let result ='';
    let i = inputStringNew.length - 1; 
    do {
      result += inputStringNew[i];
      i--;
    } while (i >= 0);
    return result;
  }
    const inputStringNew  = 'This Work';
    const reversed = flippText(inputStringNew);

    console.log(reversed);

    // 7 задание 

    function objPalindrome(str) {
      str = str.replace(/\s/g, '').toLowerCase();
    
      const reversedStr = str.split('').reverse().join('');
      
      return str === reversedStr;
    }
        const input = "level";

    const resultUs = objPalindrome(input);
    
    console.log(resultUs); 
    

  // Lesson 20 HW

  // 1 задание

  const studentGrades = [
    { name: "Anna", note: 9 },
    { name: "Denis", note: 7 },
    { name: "Cristian", note: 8 },
    { name: "Daniel", note: 6 },
    { name: "Elena", note: 10 }
  ];
  
  const totalNotes = studentGrades.reduce((acc, student) => acc + student.note, 0);
  const averageNote = totalNotes / studentGrades.length;
  
  console.log("Средний балл учащихся:", averageNote);
  
  // 2 задание

  const products = [
    {name: "Tshirt", price: 50, isAvailable: true },
    {name: "Pants", price: 80, isAvailable: false },
    {name: "Jacket", price: 120, isAvailable: true },
    {name: "Shirt", price: 60, isAvailable: true },
    {name: "Skirt", price: 40, isAvailable: false }
  ];
  
const availableProducts = products.filter(product => product.isAvailable);
const availableProductNames = availableProducts.map(product => product.name);

console.log(availableProductNames);

// 3 задание
const numbers = [10, 5, 8, 15, 3, 20];

const maxNumber = numbers.reduce((max, currentNumber) => {
  return (currentNumber > max) ? currentNumber : max;
}, numbers[0]);

console.log("Maximum number:", maxNumber);

// 4 Задание

function studentArray(students){
  const students = [{John: [8, 7, 9]}, {Mary: [9, 9, 10]}, {Alex: [6, 8, 7]}];

  const totalBall = studentBall.reduce((acc, student) => acc + student.note, 0);
  const averageNoteNew = totalBall / studentBall.length;

}

console.log(averageNoteNew );