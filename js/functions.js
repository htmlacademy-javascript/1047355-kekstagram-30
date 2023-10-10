// функция проверки максимальной длинны строки
function checkStringLength(string, length) {
  return string.length <= length;
}
checkStringLength('проверяемая строка', 20);

// функция проверки на палиндромность
function checkPalindrome (string) {
  const clearString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';


  for (let i = clearString.length - 1; i >= 0; i--) {
    reversedString += clearString[i];
  }
  return clearString === reversedString;
}
checkPalindrome('Лёша на полке клопа нашёл');

// функция извлекает число из строки
function extractDigits(string) {
  // если значение не строка переводим в строку
  if (typeof string !== 'string') {
    string = string.toString();
  }

  // переменная для хранение чисел
  let result = '';

  // Итерируемся по символам во входной строке
  for (let i = 0; i < string.length; i++) {
    const currentSymbol = string.charAt(i);

    //если символ число то добавляем его к результату проверку проводим с помощью регулярного выражения
    if (/^[0-9]$/.test(currentSymbol)) {
      result += currentSymbol;
    }
  }

  // Преобразуем результат в число с помощью parseInt
  const extractedNumber = parseInt(result, 10);

  // Проверяем, удалось ли получить целое положительное число
  if (!Number.isNaN(extractedNumber) && extractedNumber >= 0) {
    return extractedNumber;
  }
  return NaN;
}
extractDigits('1 кефир, 0.5 батона');

