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

