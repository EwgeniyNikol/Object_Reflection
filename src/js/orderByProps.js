export default function orderByProps(obj, sortOrder = []) {
  const result = [];

  for (const key of sortOrder) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }

  const remainingProps = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (!sortOrder.includes(key)) {
      remainingProps.push(key);
    }
  }

  remainingProps.sort();

  for (const key of remainingProps) {
    result.push({ key, value: obj[key] });
  }

  return result;
}
