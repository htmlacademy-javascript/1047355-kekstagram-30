const applyRandomFilter = (imagesData, itemLimit = 10) => {
  const compare = () => .5 - Math.random();
  return imagesData.toSorted(compare).slice (0, itemLimit);
};

const applyDiscussedFilter = (imagesData) => {
  const compare = (a, b) => b.comments.length - a.comments.length;
  return imagesData.toSorted(compare);
};

export {applyRandomFilter, applyDiscussedFilter};
