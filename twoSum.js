const array = [2, 7, 11, 15];

const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};
const sumOfTwoNums = twoSum(array, 9);
console.log(sumOfTwoNums);

// 2 -> 2+7 -> 2+11 -> 2+15
// 7 -> 7+11 -> 7+15
// 11 -> 11+15
const combineNums = (array) => {
  for (i = 0; i < array.length; i++) {
    // console.log(array[i]);
    for (j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};
const combinedNums = combineNums(array);
