function sockMerchant(n, ar) {
  let pairs = 0;
  ar.reduce((acc, item) => {
    !acc[item] ? (acc[item] = 1) : (acc[item] += 1);
    acc[item] % 2 === 0 ? (pairs += 1) : null;
    return acc;
  }, {});

  return pairs;
}
