export default function iterateThroughObject(reportWithIterator) {
  let name = '';
  const pipe = ' | ';
  for (const item of reportWithIterator) {
    name += item + pipe;
  }

  return name;
}
