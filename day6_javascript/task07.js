export function arrayFiltering(array, test) {
  if (test == null) {
    return array;
  }
  let resultat = [];
  array.forEach((element) => {
    if (test(element)) {
      resultat.push(element);
    }
  });
  return resultat;
}
