export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  if (position > length) {
    throw new RangeError('Position outside range');
  }
  view[position] = value;
  const dv = new DataView(buffer);
  return dv;
}
