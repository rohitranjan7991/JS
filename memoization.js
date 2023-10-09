// Memoization is technique that can be used to reduce time-consuming calculations
// by saving previous inputs to something called cache and reeturning the result from it.

let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (func) => {
  const cache = {};
  return function (...args) {
    const num = args[0];
    if (num in cache) {
      console.log("value from cache");
      return cache[num];
    } else {
      console.log("from non cache");
      const result = func(num);
      cache[num] = result;
      return result;
    }
  };
};

console.time();
const val = memoize(calc)(5);
console.log(val);
console.timeEnd();

console.time();
console.log(val);
console.timeEnd();
