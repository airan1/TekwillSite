var weightSarah = 65; // Вес Сары в килограммах
var weightBob = 93; // Вес Боба в килограммах
var heightSarah = 1.75; // Рост Сары в метрах
var heightBob = 1.89; // Рост Боба в метрах

// Шаг 2: Расчет ИМТ для Сары и Боба
var bmiSarah = weightSarah / (heightSarah * heightSarah); // ИМТ Сары
var bmiBob = weightBob / (heightBob * heightBob); // ИМТ Боба

// Вывод результатов
console.log("ИМТ Сары: " + bmiSarah);
console.log("ИМТ Боба: " + bmiBob);