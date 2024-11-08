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
