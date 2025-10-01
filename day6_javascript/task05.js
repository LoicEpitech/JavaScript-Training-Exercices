function range(start, end, step = 1) {
  let tableau = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      tableau.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      tableau.push(i);
    }
  }
  return tableau;
}
module.exports = range;
