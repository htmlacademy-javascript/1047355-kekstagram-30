const getRandomIntegers = (min, max) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

const getRandomItem = (items) => items[getRandomIntegers(0, items.length - 1)];

const createCommentsData = (itemCount) => {
  const message = [
    'Всё отлично!', 'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

  return new Array(itemCount).fill(1).map((start,index) => ({
    id: start + index,
    avatar: `img/avatar-/${getRandomIntegers(1, 6)}.svg`,
    message: getRandomItem(message)
  }));

};

const createImagesData = (itemCount = 25) => {

  const description = [
    'Волшебный закат на берегу океана, где небо пламенеет разноцветными оттенками.',
    'Таинственный лес, укутанный мистическим туманом, где деревья словно стражи древних секретов.',
    'Искусство городской жизни, где улицы переплетаются в графический лабиринт, а фонари кажутся звездами на земле.'];

  return new Array(itemCount).fill(1).map((start,index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(description),
    likes: getRandomIntegers(15, 200),
    Comment: createCommentsData(getRandomIntegers(0, 30))
  }));
};
void (getRandomIntegers, getRandomItem, createImagesData);
