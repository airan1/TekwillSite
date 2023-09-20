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

    // 7 задание (7 задание было сложное, пришлось использовать ChatGPT)

    function objPalindrome(str) {
      str = str.replace(/\s/g, '').toLowerCase();
    
      const reversedStr = str.split('').reverse().join('');
      
      return str === reversedStr;
    }
        const input = "level";

    const resultUs = objPalindrome(input);
    
    console.log(resultUs); // Выведет "true"
    