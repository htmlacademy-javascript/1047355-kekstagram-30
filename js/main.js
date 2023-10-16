const getRandomIntegers = (min, max) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

const getRandomItem = (items) => items[getRandomIntegers(0, items.length - 1)];

const createImagesData = (itemCount = 25) => {
  const description = ['Описание 1', 'Описание 2', 'Описание 3'];
  return new Array(25).fill(1).map((start,index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(description),
    likes: getRandomIntegers(15, 200),
    Comment:[] // TODO: createCommentsData
  }));
};
void (getRandomIntegers, getRandomItem, createImagesData);
