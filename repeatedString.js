function repeatedString(s, n) {
  let aCount = 0;
  let cleanRunThrough = Math.floor(n / s.length);
  let leftover = n - s.length * cleanRunThrough;

  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === "a") {
      aCount += 1;
    }
  }
  if (s.length === 1) {
    return aCount * n;
  }

  if (leftover === 0) {
    return (aCount *= cleanRunThrough);
  }

  aCount *= cleanRunThrough;

  for (let i = 0; i < leftover; i++) {
    if (s[i].toLowerCase() === "a") {
      aCount += 1;
    }
  }

  return aCount;
}
