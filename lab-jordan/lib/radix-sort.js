const radix_sort = module.exports = (arr, base=10) => {
  let maxVal = Math.max(...arr);

  let iteration = 0;

  while (base ** iteration <= maxVal) {
    arr = buckets_to_list(list_to_buckets(arr, base, iteration));
    iteration++;
  }
  return arr;
}

const list_to_buckets = (arr, base, iteration) => {
  let buckets = new Map();

  for (let i = 0; i < base; buckets.set(i, []), i++);

  for (let i = 0; i < arr.length; i++) {
    let digit = Math.floor(arr[i] / (base ** iteration)) % base;
    buckets.get(digit).push(arr[i]);
  }
  return buckets;
}

const buckets_to_list = (buckets) => {
  let numbers = [];

  for (let value of buckets.values()) {
    numbers.push(...value)
  }
  return numbers;
}
