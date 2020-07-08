export const checkArraySubset = (subset, mainset) => {
  let comparisonArray = [];
  subset.forEach((element) => {
    comparisonArray = comparisonArray.concat(mainset.indexOf(element));
  });

  return !comparisonArray.includes(-1);
};
