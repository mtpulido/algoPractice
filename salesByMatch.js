function sockMerchant(n, ar) {
  let pairs = 0;
  ar.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1;
    } else {
      acc[item] += 1;
    }
    if (acc[item] % 2 === 0) {
      pairs += 1;
    }
    return acc;
  }, {});

  return pairs;
}
