import {getRandomInteger, getRandomItem} from './utilities.js';


const createCommentsData = (itemCount) => {
  const message = [
    'Всё отлично!', 'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const name = [
    'Александр',
    'Екатерина',
    'Иван',
    'Мария',
    'Сергей',
    'Ольга',
    'Дмитрий',
    'Анна',
    'Павел',
    'Наталья'
  ];

  return new Array(itemCount).fill(1).map((start,index) => ({
    id: start + index,
    avatar: `img/avatar-/${getRandomInteger(1, 6)}.svg`,
    message: getRandomItem(message),
    name: getRandomItem(name)
  }));

};

const createImagesData = (itemCount = 25) => {

  const description = [
    'Волшебный закат на берегу океана, где небо пламенеет разноцветными оттенками.',
    'Таинственный лес, укутанный мистическим туманом, где деревья словно стражи древних секретов.',
    'Искусство городской жизни, где улицы переплетаются в графический лабиринт, а фонари кажутся звездами на земле.'
  ];

  return new Array(itemCount).fill(1).map((start,index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(description),
    likes: getRandomInteger(15, 200),
    comments: createCommentsData(getRandomInteger(0, 30))
  }));
};
export {createImagesData};


