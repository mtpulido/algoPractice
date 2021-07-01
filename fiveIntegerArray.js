function miniMaxSum(arr) {
  let max = 0;
  let min = 0;

  let sortedArray = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sortedArray.length; i++) {
    if (i === 0) {
      min += sortedArray[i];
    } else if (i === sortedArray.length - 1) {
      max += sortedArray[i];
    } else {
      max += sortedArray[i];
      min += sortedArray[i];
    }
  }
  console.log(min, max);
}
