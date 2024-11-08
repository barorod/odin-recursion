const fibs = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
};

const fibsRec = (n) => {
  console.log('This was printed recursively');
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return arr;
};

// console.log(fibsRec(0));
// console.log(fibsRec(1));
// console.log(fibsRec(2));
// console.log(fibs(8));
console.log(fibsRec(8));
