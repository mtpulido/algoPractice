function repeatedString(s, n) {
  let aCount = 0;
  let cleanRunThrough = Math.floor(n / s.length);

  s.split("").forEach((value) =>
    value.toLowerCase() === "a" ? (aCount += 1) : null
  );

  if (s.length === 1) return aCount * n;

  aCount *= cleanRunThrough;

  if (n % s.length === 0) return aCount;

  for (let i = 0; i < n % s.length; i++) {
    s[i].toLowerCase() === "a" ? (aCount += 1) : null;
  }
  return aCount;
}
