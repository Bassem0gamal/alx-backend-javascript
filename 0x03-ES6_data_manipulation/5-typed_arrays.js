export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const result = new Int8Array(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  result[position] = value;

  return new DataView(result.buffer);
}
