function countingValleys(steps, path) {
  let elevation = 0;
  const valleys = path.split("").reduce((acc, value) => {
    if (value === "U") {
      elevation += 1;
      if (elevation === 0) {
        acc += 1;
      }
    } else {
      elevation -= 1;
    }
    return acc;
  }, 0);
  return valleys;
}
