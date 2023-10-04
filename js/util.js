// функция для генерации случайного числа в заданном диапазоне с возможность передавать параметры в любой последовательности
function getRandomPositiveInteger(a, b) {
  // объявляем две переменные минимального и максимального числа
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  // 1) с помощью Math.abs переводим переданные параметры в положительные значения
  // 2) с помощью Math.min возвращает меньшее число
  // 3) с помощью Math.ceil округляем число до целого
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // 1) с помощью Math.abs переводим переданные параметры в положительные значения
  // 2) с помощью Math.max возвращаем наибольшее  число
  // 3) с помощью Math.floor  Округляет аргумент до ближайшего меньшего целого
  const result = Math.random() * (upper - lower + 1) + lower; // с помощью Math.random() находим случайное число от 0 до 1 умножаем на наименьшее вычесть наибольшее +1 и прибавляем наименьше
  return Math.floor(result); // возвращаем результат с округлением до меньшего числа
}

getRandomPositiveInteger(3, 5); // вызов функции с передачей аргументов
console.log(getRandomPositiveInteger(3, 5)); // вывод в консоль

// функция для проверки длинны строки принимает два параметра строку и длину(число)
function checkStringLength(string, length) {
  return string.length <= length; // функция возвращает болевое значение тру если длинна строки
}

checkStringLength("hello", 5); // вызов функции с передачей аргументов
console.log(checkStringLength("hello", 5));
