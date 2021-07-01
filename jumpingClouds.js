function jumpingOnClouds(c) {
  let jumps = 0;
  let index = 0;
  while (index < c.length - 1) {
    if (c[index + 2] === 0) {
      index += 2;
      jumps += 1;
    } else {
      index += 1;
      jumps += 1;
    }
  }
  return jumps;
}