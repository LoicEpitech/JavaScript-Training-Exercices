export function objectsDeeplyEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null || typeof a !== "object" || typeof b !== "object")
    return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!objectsDeeplyEqual(a[key], b[key])) return false;
  }
  return true;
}
