const nums = [6, 3, 5, 2];
const p = 9;

function sumArr(arr) {
  let sum = 0;
  for (var num of arr) {
    sum += num;
  }
  return sum;
}

function removeItemFromArray(array, valueToRemove) {
  const newArray = array.filter((item) => item !== valueToRemove);
  return newArray;
}

function searchForNumber(nums, p, depth = 0, depthLimit = Infinity) {
  const set = new Set(nums);
  let sum = sumArr(nums);
  let remaining = sum % p;
  let rDepth = 0;
  if (remaining == 0) {
    // console.log('log1');
    return true;
  } else if (set.has(remaining)) {
    // console.log(sum, remaining);
    // console.log('log2');
    return true;
  } else {
    var i = 0;
    let isSolved = false;
    while (i < nums.length && !isSolved && depth < depthLimit) {
      isSolved = searchForNumber(
        removeItemFromArray(nums, nums[i]),
        p,
        depth + 1,
        depthLimit
      );
      i++;
    }
    return isSolved;
  }
}
var minSubarray = function (nums, p) {
  let isSolved = false;
  let i = 0;
  while (!isSolved) {
    isSolved=searchForNumber(nums, p, 0, i);
    i++
  }
  return i;
};

// console.log(searchForNumber(nums, p, 0, 0)) 
console.log( minSubarray(nums,p));
