export default function hasValuesFromArray(checkSet, arr) {
  return arr.every((value) => checkSet.has(value));
}
