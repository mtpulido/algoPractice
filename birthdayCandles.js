function birthdayCakeCandles(candles) {
  let tallestCount = 0;

  candles.reduce((acc, value) => {
    if (acc < value) {
      acc = value;
      tallestCount = 1;
    } else if (acc === value) tallestCount += 1;

    return acc;
  }, candles[0]);

  return tallestCount;
}

console.log(birthdayCakeCandles([5, 2, 5, 3, 6, 4, 3]));
