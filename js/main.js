const getRandomIntegers = (min, max) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

const getRandomItem = (items) => [getRandomIntegers(0, items.length - 1)];

void (getRandomIntegers(), getRandomItem());
