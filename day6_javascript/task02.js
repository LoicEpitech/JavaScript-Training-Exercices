export function arraysAreEqual(tableau1, tableau2) {
  if (tableau1.length !== tableau2.length) {
    return false;
  }

  if (!Array.isArray(tableau1) || !Array.isArray(tableau2)) {
    return false;
  }

  for (let i = 0; i < tableau1.length; i++) {
    if (tableau1[i] !== tableau2[i]) {
      return false;
    }
  }

  return true;
}
