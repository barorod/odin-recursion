const merge = (left, right) => {
  let res = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      res.push(left[leftIdx]);
      leftIdx++;
    } else {
      res.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return [...res, ...left.slice(leftIdx), ...right.slice(rightIdx)];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 1, 0, 7, 3, 4, 100, 30, 32, 65, 26, 84, 89]));
