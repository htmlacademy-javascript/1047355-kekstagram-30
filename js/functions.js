// функция проверки максимальной длинны строки
const fitsLength = (text, maxLength) => text.length <= maxLength;


// функция проверки на палиндром
const isPalindrome = (sequence) => {
  const text = String(sequence).toLowerCase().replaceAll(' ', '');
  const reversedText = text.split('').reverse().join('');
  return text === reversedText;
};

// функция извлекает число из строки
const parseDigits = (sequence) => {
  const digits = String(sequence).replace(/[^0-9]+/g, '');
  return digits ? Number(digits) : NaN;

};
void (fitsLength, isPalindrome, parseDigits);
