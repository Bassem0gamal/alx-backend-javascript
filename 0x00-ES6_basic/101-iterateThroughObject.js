export default function iterateThroughObject(reportWithIterator) {
  let name = '';
  const pipe = ' | ';
  for (const item of reportWithIterator) {
    name += item + pipe;
  }
  if (name.endsWith(pipe)) {
    name = name.slice(0, -pipe.length);
  }

  return name;
}
