export function countGs(phrase) {
  let count = 0;
  for (let char of phrase) {
    if (char === "G") {
      count++;
    }
  }
  return count;
}
