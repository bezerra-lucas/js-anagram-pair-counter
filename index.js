function solution(a) {
  let counter = 0;
  let counts = {};
  for (let i = 0; i < a.length; i++) {
    let digits = String(a[i]).split("");
    digits.sort();
    let sorted = digits.join("");
    if (sorted in counts) {
      counts[sorted]++;
    } else {
      counts[sorted] = 1;
    }
  }
  for (let sorted in counts) {
    let count = counts[sorted];
    if (count >= 2) {
      counter += (count * (count - 1)) / 2;
    }
  }
  return counter;
}
