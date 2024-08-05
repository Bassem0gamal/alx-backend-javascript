export default function appendToEachArrayValue(array, appendString) {
  const list = [];
  for (const idx of array) {
    list.push(appendString + idx);
  }

  return list;
}
