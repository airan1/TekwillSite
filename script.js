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


// 16  домашнее задание
var fruits = [];

fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

console.log("Длина массива: " + fruits.length);

console.log("Содержимое массива: " + fruits);

// Объявляем массив с именем numbers
var numbers = [1, 2, 3, 4, 5];

console.log("Исходный массив: " + numbers);
var lastRemoved = numbers.pop();
console.log("Последний элемент удален: " + lastRemoved);
console.log("Массив после удаления последнего элемента: " + numbers);

var firstRemoved = numbers.shift();
console.log("Первый элемент удален: " + firstRemoved);
console.log("Массив после удаления первого элемента: " + numbers);

// новая задача
var colors = ["red", "green", "blue", "yellow"];
var greenIndex = colors.indexOf("green");
console.log("Индекс элемента 'green': " + greenIndex);

var hasOrange = colors.includes("orange");
console.log("Массив содержит элемент 'orange': " + hasOrange);

// names

var names = ["john","jane", "Mike", "Jeniffer"];
var newName = names.unshift("david");
console.log(names);
var searchName = names.indexOf("Mike");
console.log(searchName);

// numbers
var numbers = [2, 4, 6, 8, 10];

var includesFive = numbers.includes(5);
console.log("Массив содержит элемент 5: " + includesFive);

numbers.push(12);
console.log("Массив после добавления элемента 12: " + numbers);

// Alphabet sort
var months = ["Ianuary", "February", "Mart", "April", "May", "June", "July", "August", "Septebmer", "Octobar", "November", "December"];

var monthsAlphabet = months.sort();
console.log(monthsAlphabet);
// Filter of months
var monthsFilter = months.filter(month => months.length > 3);

console.log(monthsFilter);

// Slice metod Jule November

var monthsSlice = monthsAlphabet.slice(5, -2);

console.log(monthsSlice);

// Отсортируем месяцы с минимум 5 буквами, далее отсортируем их

var filteredMonths = months.filter(month => month.length >= 5);

console.log(filteredMonths);

var monthsSortedFive = filteredMonths.sort();


console.log(monthsSortedFive);