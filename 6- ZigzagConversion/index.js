const s = 'A';
numRows = 2;

var convert = function (s, numRows) {
  if (numRows == 1) {
    return s;
  }
  let result = '';
  const key = 2 * numRows - 2;
  let num;
  for (var i = 0; i < numRows; i++) {
    let j = key - i * 2;
    let l = i * 2;
    num = i;
    if (s[num]) {
      result += s[num];
    }
    while (num < s.length) {
      if (j) {
        num += j;
        if (num < s.length) {
          result += s[num];
        }
      }
      if (l) {
        num += l;
        if (num < s.length) {
          result += s[num];
        }
      }
    }
  }
  return result;
};

console.log(convert(s, numRows));
