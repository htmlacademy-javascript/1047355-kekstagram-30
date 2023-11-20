const applyRandomFilter = (imagesData, itemLimit = 10) => {
  const compare = () => .5 - Math.random();
  return [...imagesData].sort(compare).slice(0, itemLimit);
};

const applyDiscussedFilter = (imagesData) => {
  const compare = (imageA, imageB) => imageB.comments.length - imageA.comments.length;
  return [...imagesData].sort(compare);
};

export {applyRandomFilter, applyDiscussedFilter};
